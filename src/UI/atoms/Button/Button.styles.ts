import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem;
  background: none;
  display: block;
  margin: 1rem auto;
  width: 30%;
  text-align: center;
  background: green;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  &:disabled {
    cursor: wait;
  }
`;
