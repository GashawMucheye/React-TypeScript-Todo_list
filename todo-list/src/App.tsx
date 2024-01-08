import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div
      className="h-screen text-center flex bg-[#b2a7a7] 
  flex-col"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
