import { FaRegTrashAlt } from "react-icons/fa";
import { ItemType } from "../App";

interface ItemProps {
  item: ItemType;
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
}

export function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <span
        style={
          item.complete
            ? { textDecoration: "line-through", textDecorationColor: "#00ff00" }
            : {}
        }
      >
        {item.description}
      </span>
      <input
        type="checkbox"
        checked={item.complete}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <button onClick={() => onDeleteItem(item.id)}>
        <span>
          <FaRegTrashAlt />
        </span>
      </button>
    </li>
  );
}
