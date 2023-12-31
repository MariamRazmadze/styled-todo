import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.allTextsColor};
  &:hover {
    color: ${({ theme }) => theme.buttonsHoverColor};
  }
`;
