import React from 'react';
import { ReactNode, createContext, useReducer } from 'react';
import { Alltasks } from '../types/types';

type StateType = {
  tasks: Alltasks[];
};
type IncrementAction = { type: 'INCREMENT'; payload: number };

type DecrementAction = { type: 'DECREMENT' };

type ResetAction = { type: 'RESET' };
type AddAction = { type: 'ADD_TASK'; payload: Alltasks };
type DeleteAction = { type: 'DELETE_TASK'; payload: number };
type DoneAction = { type: 'TASK_DONE'; payload: number };
type ReorderTask = {
  type: 'REORDER_TASK';
  sourceIndex: number;
  destinationIndex: number;
};

type ActionType =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | AddAction
  | DeleteAction
  | DoneAction
  | ReorderTask;
const INITIALSTATE = {
  tasks: [],
  // updateTasks: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id != action.payload)],
      };
    case 'TASK_DONE':
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        ],
      };
    case 'REORDER_TASK': {
      const updatedTasks: Alltasks[] = [...state.tasks];
      const [reorderedTask] = updatedTasks.splice(action.sourceIndex, 1);
      updatedTasks.splice(action.destinationIndex, 0, reorderedTask);
      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
};

export const Tasking = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIALSTATE,
  dispatch: () => {},
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  return (
    <Tasking.Provider value={{ state, dispatch }}>{children}</Tasking.Provider>
  );
};
