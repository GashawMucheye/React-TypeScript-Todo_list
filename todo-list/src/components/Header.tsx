import { FC } from 'react';
const Header: FC = () => {
  return (
    <header className="bg-blue-400 p-5 text-center hover:text-white fixed top-0 left-0 right-0 z-10 ">
      <h2> Todo List</h2>
    </header>
  );
};

export default Header;
