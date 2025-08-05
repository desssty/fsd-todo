export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

export type QueryParams = {
  completed?: boolean;
};
