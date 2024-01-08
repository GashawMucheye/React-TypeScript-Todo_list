import { FC, useContext } from 'react';
import { Alltasks } from '../types/types';
import { Tasking } from '../context/TaskProvider';
const SingleTodo: FC<Alltasks> = ({ todo, id, isDone }) => {
  const { dispatch } = useContext(Tasking);
  return (
    <div>
      <section>
        {isDone ? <s>{todo}</s> : <div>{todo}</div>}

        <div>{isDone}</div>
        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: 'DELETE_TASK', payload: id });
            }}
          >
            Delete
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: 'TASK_DONE', payload: id });
            }}
          >
            Done
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleTodo;
