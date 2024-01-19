import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useContext } from 'react';
import { Tasking } from './context/TaskProvider';

const App = () => {
  const { dispatch } = useContext(Tasking);

  const onDragEnd = (result: DropResult) => {
    console.log(result);

    if (!result.destination) {
      return; // Drop outside the list
    }

    dispatch({
      type: 'REORDER_TASK',
      sourceIndex: result.source.index,
      destinationIndex: result.destination.index,
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className="min-h-[100vh] text-center flex bg-[#b2a7a7] 
  flex-col font-sans hover:font-serif relative"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </DragDropContext>
  );
};

export default App;
