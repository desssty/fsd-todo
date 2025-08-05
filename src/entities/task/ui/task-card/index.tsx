import { Card } from "antd";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  loading: boolean;
  title: string;
  text: string;
  actions?: ReactNode[];
};

export const TaskCard = ({ text, actions, title, loading }: Props) => {
  return (
    <Card
      title={title}
      loading={loading}
      actions={actions}
      extra={<Link to="/">Back</Link>}
      style={{ width: "500px" }}
    >
      {text}
    </Card>
  );
};
