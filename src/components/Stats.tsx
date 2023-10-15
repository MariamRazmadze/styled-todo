import { ItemType } from "../App";
import styled from "styled-components";

interface StatsProps {
  items: ItemType[];
}

export function Stats({ items }: StatsProps) {
  if (!items.length)
    return <StatsComponent>No todos yet. Start adding!</StatsComponent>;
  const numItems = items.length;
  const numCompleted = items.filter((item) => item.complete).length;
  const percentage = Math.round((numCompleted / numItems) * 100);
  return (
    <StatsComponent>
      {percentage === 100
        ? "All Todos complete, congratulations!"
        : ` You
      have completed ${numCompleted} items (${percentage}%) of all ${numItems}
      Todos.`}
    </StatsComponent>
  );
}

const StatsComponent = styled.footer`
  background-color: ${({ theme }) => theme.primaryColor};
  text-align: center;
  font-weight: 700;
  padding: 3.2rem 1rem;
  color: ${({ theme }) => theme.allTextsColor};
`;
