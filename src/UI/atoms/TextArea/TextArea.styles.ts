import styled from "styled-components";

export const TextAreaField = styled.textarea`
  padding: 0.5rem;
  margin-top: 1.5rem;
  display: block;
  resize: none;
  font-family: inherit;

  @media only screen and (min-width: 900px) {
    width: 90%;
  }
`;
