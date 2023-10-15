import GlobalStyles from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Stats } from "./components/Stats";
import { TodoList } from "./components/ToDoList";
import { Form } from "./components/Form";

// const defaultTheme = {
//   background: "#485b62;",
//   primaryColor: "#542c49",
// };

const blueTheme = {
  background: "#0F52BA",
  primaryColor: " #002366",
};

export interface ItemType {
  id: string;
  description: string;
  complete: boolean;
}

function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  function handleAddItems(item: ItemType) {
    setItems((items: ItemType[]) => [...items, item]);
  }

  function handleDeleteItem(id: string) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: string) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <ThemeProvider theme={blueTheme}>
      <GlobalStyles />
      <div className="app">
        <Header />
        <Form onAddItems={handleAddItems} />
        <TodoList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </ThemeProvider>
  );
}

export default App;
