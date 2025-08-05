import { Row } from "antd";
import { TaskRow } from "entities/task";
import { ToggleTask } from "features/toggle-task";
import type { Todo } from "shared/api/todos/model";

type Props = {
  tasks: Todo[];
};

export const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <Row key={task.id}>
          <TaskRow
            title={task.title}
            id={task.id}
            action={<ToggleTask todo={task} />}
          />
        </Row>
      ))}
    </>
  );
};
