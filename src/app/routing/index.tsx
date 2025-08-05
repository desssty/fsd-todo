import { TodoListPage } from "pages/todo-list-page";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "shared/ui/main_layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TodoListPage />,
      },
      {
        path: ":id",
        element: <>tododetail</>,
      },
    ],
  },
]);
