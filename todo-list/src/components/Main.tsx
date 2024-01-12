import { FC, useContext, useState } from 'react';
import { Tasking } from '../context/TaskProvider';
import SingleTodo from './SingleTodo';
import InputFields from './InputFields';
import { Droppable } from 'react-beautiful-dnd';

const Main: FC = () => {
  const [todo, setTodo] = useState<string>('');
  const { state } = useContext(Tasking);
  const { tasks } = state;

  return (
    <main className="py-5  flex-1 bg-[#333]">
      <InputFields todo={todo} setTodo={setTodo} />
      <Droppable droppableId="TodosList">
        {(provided) => (
          <section
            className="bg-white-400 mt-2 mx-auto max-w-[1000px] p-5"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map(({ todo, id, isDone }, index) => (
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
