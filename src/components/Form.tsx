import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemType } from "../App";

interface FormProps {
  onAddItems: (item: ItemType) => void;
}
export function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!description) return;
    const newItem = { description, complete: false, id: uuidv4() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>What are your plans for today?</h3>
      <div>
        <input
          type="text"
          placeholder="type here..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>
          <span>
            <AiOutlinePlus />
          </span>
        </button>
      </div>
    </form>
  );
}
