import { useState } from "react";
import { Item } from "./Item";
import { ItemType } from "../App";
import styled from "styled-components";

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
    <ListWrapper>
      <List>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </List>
      <ButtonsContainer>
        <SelectWrapper>
          <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="completion">Sort by completion</option>
          </Select>
          <Arrow></Arrow>
        </SelectWrapper>
        <ClearAllButton onClick={onClearList}>Clear all</ClearAllButton>
      </ButtonsContainer>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  color: ${({ theme }) => theme.formTextColor};
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  justify-content: center;
  align-content: start;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  padding: 1rem 5.5rem 1rem 1.5rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.allTextsColor};
  appearance: none;
  border: none;
  outline: none;
`;

const Arrow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  background-color: ${({ theme }) => theme.primaryColor};
  height: 100%;
  width: 4rem;
  pointer-events: none;
  &::before,
  &::after {
    --size: 0.75rem;
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid #cbcbe3;
    top: 35%;
  }
  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid #cbcbe3;
    top: 65%;
  }
`;

const ClearAllButton = styled.button`
  border: 1px solid;
  font: inherit;
  font-size: 1.5rem;
  padding: 0.7rem;
  transition: 0.25s;
  color: ${({ theme }) => theme.allTextsColor};
  background-color: ${({ theme }) => theme.background};
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.primaryColor};
    transform: translateY(-0.25em);
  }
`;
