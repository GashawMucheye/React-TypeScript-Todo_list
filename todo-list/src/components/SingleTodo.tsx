import { FC, useContext } from 'react';
import { Tasking } from '../context/TaskProvider';
import { Draggable } from 'react-beautiful-dnd';
import { TypeSingleTodo } from '../types/types';
const SingleTodo: FC<TypeSingleTodo> = ({ todo, id, isDone, index }) => {
  const { dispatch } = useContext(Tasking);
  //handle delete
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };
  //handle done
  const handleDone = () => {
    dispatch({ type: 'TASK_DONE', payload: id });
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="bg-yellow-200 my-3 rounded-lg grid gap-6 py-5 md:grid-cols-2 md:items-center hover:bg-blue-300 hover:text-blue-100 border-dashed border-2 border-sky-500 drop-shadow-lg"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <section>{isDone ? <s>{todo}</s> : <div>{todo}</div>}</section>

          <section>
            <button
              className="bg-red-500 text-center m-2 p-1 rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-green-600 text-center m-2 p-1 rounded-md"
              onClick={handleDone}
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
