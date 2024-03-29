import { FC, useContext, useEffect, useRef } from 'react';
import { Tasking } from '../context/TaskProvider';
import { Props } from '../types/types';

const InputFields: FC<Props> = ({ todo, setTodo }) => {
  const { dispatch } = useContext(Tasking);
  const inputElement = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputElement.current?.focus();
  }, [todo]);

  const handleAdd = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: { id: Date.now(), todo, isDone: false },
    });
    setTodo('');
  };

  return (
    <div className="mx-auto max-w-[1000px] p-5 mt-24">
      <input
        className="w-[90%] text-center rounded-lg"
        ref={inputElement}
        value={todo}
        type="text"
        placeholder="Enter Your Task Here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <button
        className="text-center bg-blue-600 px-[12px] rounded-full mt-2"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default InputFields;
