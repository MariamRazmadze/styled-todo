import { useState } from "react";
import { Item } from "./Item";
import { ItemType } from "../App";

interface TodoListProps {
  items: ItemType[];
  onDeleteItem: (id: string) => void;
  onToggleItem: (id: string) => void;
  onClearList: () => void;
}
export function TodoList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: TodoListProps) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems: ItemType[] = [...items];
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "completion")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.complete) - Number(a.complete));
  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="completion">Sort by completion</option>
          </select>
          <span></span>
        </div>
        <button onClick={onClearList}>Clear all</button>
      </div>
    </div>
  );
}
