import { FC, useContext } from 'react';
import { Tasking } from '../context/TaskProvider';

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const InputFields: FC<Props> = ({ todo, setTodo }) => {
  const { dispatch } = useContext(Tasking);
  const handleAdd = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: { id: Date.now(), todo, isDone: false },
    });
  };
  return (
    <div className="bg-blue-950 mx-auto w-[1000px] p-5">
      <input
        className="w-[90%] text-center rounded-lg"
        type="text"
        placeholder="Enter Your Task Here"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <button
        className="text-center bg-blue-600 px-[12px] rounded-full"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default InputFields;
