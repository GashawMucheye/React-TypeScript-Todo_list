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
    <div>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputFields;
