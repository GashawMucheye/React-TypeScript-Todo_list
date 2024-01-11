type Alltasks = {
  id: number;
  todo: string;
  isDone: boolean;
};

type TypeSingleTodo = {
  todo: string;
  id: number;
  isDone: boolean;
  index: number;
};

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

export type { Alltasks, TypeSingleTodo, Props };
