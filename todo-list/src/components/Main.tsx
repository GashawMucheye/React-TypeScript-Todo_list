import { FC, useContext, useState } from 'react';
import { Tasking } from '../context/TaskProvider';
import SingleTodo from './SingleTodo';
import InputFields from './InputFields';

const Main: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const { state } = useContext(Tasking);

  return (
    <div className="py-5  flex-1 bg-white">
      <InputFields todo={todo} setTodo={setTodo} />
      {state.tasks.map(({ todo, id, isDone }) => (
        <SingleTodo todo={todo} id={id} isDone={isDone} />
      ))}
    </div>
  );
};

export default Main;
