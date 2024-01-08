import { FC, useContext, useState } from 'react';
import { Tasking } from '../context/TaskProvider';
import SingleTodo from './SingleTodo';
import InputFields from './InputFields';
import { Droppable } from 'react-beautiful-dnd';

const Main: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const { state } = useContext(Tasking);

  return (
    <main className="py-5  flex-1 bg-green-600">
      <InputFields todo={todo} setTodo={setTodo} />
      <Droppable droppableId="TodosList">
        {(provided) => (
          <section
            className="bg-red-400 mx-auto w-[1000px] p-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {state.tasks.map(({ todo, id, isDone }, index) => (
              <SingleTodo
                todo={todo}
                id={id}
                isDone={isDone}
                key={id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </main>
  );
};

export default Main;
