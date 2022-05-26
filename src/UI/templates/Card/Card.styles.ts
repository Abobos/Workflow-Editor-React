import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  display: flex;
  background-color: white;
  padding: 3rem 3rem;
  flex-basis: 80%;
  margin-top: 2rem;
  div {
    span,
    h4 {
      display: block;
      margin-top: 0.6rem;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 28%;
  }
`;

export const StyledLink = styled(Link)`
  appearance: none;
  text-decoration: none;
  background-color: #0e1117;
  display: inline-block;
  color: white;
  border-radius: 6px;
  padding: 0.9rem;
  margin-top: 2rem;
`;
