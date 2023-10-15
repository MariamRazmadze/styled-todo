import { ItemType } from "../App";

interface StatsProps {
  items: ItemType[];
}

export function Stats({ items }: StatsProps) {
  if (!items.length) return <p>No todos yet. Start adding!</p>;
  const numItems = items.length;
  const numCompleted = items.filter((item) => item.complete).length;
  const percentage = Math.round((numCompleted / numItems) * 100);
  return (
    <footer>
      {percentage === 100
        ? "All Todos complete, congratulations!"
        : ` You
      have completed ${numCompleted} items (${percentage}%) of all ${numItems}
      Todos.`}
    </footer>
  );
}
