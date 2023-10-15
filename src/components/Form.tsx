import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemType } from "../App";
import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./Button";

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
    <FormComponent onSubmit={handleSubmit}>
      <h3>What are your plans for today?</h3>
      <InputWrapper>
        <Input
          type="text"
          placeholder="type here..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <FormButton>
          <span>
            <AiOutlinePlus />
          </span>
        </FormButton>
      </InputWrapper>
    </FormComponent>
  );
}

const FormComponent = styled.form`
  text-align: center;
  max-width: 60rem;
  min-height: 15rem;
  width: 90%;
  margin: auto;
  margin-top: -7rem;
  position: relative;
  background-color: ${({ theme }) => theme.formColor};
  color: ${({ theme }) => theme.formTextColor};
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`;

const FormButton = styled(Button)`
  background-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 32px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
