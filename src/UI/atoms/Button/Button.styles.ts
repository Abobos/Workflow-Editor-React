import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem;
  background: none;
  display: block;
  margin-top: 1.5rem;
  width: 100%;
  background: #fec055;
  outline: none;
  border: none;
  cursor: pointer;
  color: black;
  border-radius: 10px;
  &:disabled {
    cursor: wait;
  }
`;
