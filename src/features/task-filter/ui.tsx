import { Radio } from "antd";
import type { QueryParams } from "shared/api/todos/model";
import { buttons } from "./config";

const { Button: RadioButton, Group } = Radio;

type Props = {
  onChange: (params: QueryParams) => void;
};

export const TaskFilter = ({ onChange }: Props) => {
  return (
    <Group
      defaultValue={buttons[2].id}
      onChange={(e) => {
        const selected = buttons.find((btn) => btn.id === e.target.value);
        if (selected) {
          onChange(selected.params);
        }
      }}
    >
      {buttons.map(({ id, title }) => (
        <RadioButton key={id} value={id}>
          {title}
        </RadioButton>
      ))}
    </Group>
  );
};
