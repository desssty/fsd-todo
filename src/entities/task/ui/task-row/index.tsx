import { Card, Space } from "antd";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: number;
};

export const TaskRow = ({ title, id }: Props) => {
  return (
    <Card style={{ width: "600px" }}>
      <Space>
        <Link to={`/${id}`}>{title}</Link>
      </Space>
    </Card>
  );
};
