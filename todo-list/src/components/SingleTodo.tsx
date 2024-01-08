import { FC, useContext } from 'react';
import { Tasking } from '../context/TaskProvider';
import { Draggable } from 'react-beautiful-dnd';
const SingleTodo: FC<{
  todo: string;
  id: number;
  isDone: boolean;
  index: number;
}> = ({ todo, id, isDone, index }) => {
  const { dispatch } = useContext(Tasking);
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="bg-yellow-400 my-3 rounded-lg flex justify-evenly p-5"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <section>{isDone ? <s>{todo}</s> : <div>{todo}</div>}</section>

          <section>
            <button
              className="bg-red-500 mx-[.5em] px-[.5em]"
              onClick={() => {
                dispatch({ type: 'DELETE_TASK', payload: id });
              }}
            >
              Delete
            </button>
            <button
              className="bg-green-600 px-[.5em]"
              onClick={() => {
                dispatch({ type: 'TASK_DONE', payload: id });
              }}
            >
              Done
            </button>
          </section>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
