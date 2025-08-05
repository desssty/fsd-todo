import { TaskCard } from "entities/task";
import { useEffect } from "react";
import { taskModel } from "entities/task";
import { useParams } from "react-router-dom";
import { Result, Row } from "antd";
import { ToggleTask } from "features/toggle-task";

export const TodoDetailsPage = () => {
  const {
    store: { task, getTask, taskError, isLoading },
  } = taskModel;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    getTask(id);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [id]);

  return (
    <Row justify="center" align="middle">
      {taskError ? (
        <Result title={taskError} />
      ) : (
        <TaskCard
          title={`Task#${task?.id}`}
          loading={isLoading}
          text={task?.title || ""}
          actions={task ? [<ToggleTask todo={task} />] : undefined}
        />
      )}
    </Row>
  );
};
