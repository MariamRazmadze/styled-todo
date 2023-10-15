import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.allTextsColor};
  color: ${({ theme }) => theme.primaryColor};
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 14px;
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
  margin: 2rem 0.5rem;
`;
