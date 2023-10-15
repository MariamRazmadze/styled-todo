import { FaRegTrashAlt } from "react-icons/fa";
import { ItemType } from "../App";
import styled from "styled-components";
import { Button } from "./Button";

interface ItemProps {
  item: ItemType;
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
}

export function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <ListItem>
      <span
        style={
          item.complete
            ? { textDecoration: "line-through", textDecorationColor: "#00ff00" }
            : {}
        }
      >
        {item.description}
      </span>
      <Input
        style={{ width: "20px", height: "20px" }}
        // type="checkbox"
        checked={item.complete}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <Button onClick={() => onDeleteItem(item.id)}>
        <span style={{ fontSize: "18px" }}>
          <FaRegTrashAlt />
        </span>
      </Button>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-direction: row;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  border: 1px solid magenta;
  border-radius: 50%;
  position: relative;
  padding: 0;
  margin-right: -0.5rem;

  &::after {
    content: "\2713";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #355070;
    opacity: 0;
    font-weight: bold;
  }
`;
