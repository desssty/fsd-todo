import { Result, Space, Spin } from "antd";
import { taskModel } from "entities/task";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { TaskList } from "widgets/task-list";
import { TaskFilter } from "features/task-filter";

export const TodoListPage = observer(() => {
  const {
    store: { getTaskList, isLoading, taskListError, taskList },
  } = taskModel;

  useEffect(() => {
    getTaskList({});
  }, []);

  if (taskListError) {
    return <Result title={taskListError} />;
  }

  return (
    <Space direction="vertical">
      <TaskFilter onChange={getTaskList} />
      {isLoading ? <Spin /> : <TaskList tasks={taskList} />}
    </Space>
  );
});
