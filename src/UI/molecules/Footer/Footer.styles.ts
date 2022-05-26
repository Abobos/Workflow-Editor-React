import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #002e5d;
  width: 100%;

  position: fixed;
  bottom: 0;

  color: white;
  display: block;

  padding: 2rem;
  justify-content: space-around;
  align-items: center;
  display: flex;

  flex-direction: column;

  & div {
    margin-top: 1rem;
  }

  & div:nth-child(1) {
    order: 1;
  }

  & div:nth-child(1) a:not(:first-of-type) {
    margin-left: 1rem;
  }

  & a {
    text-decoration: none;
    color: white;
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    bottom: 0;
    color: white;
    display: block;

    justify-content: space-around;
    display: flex;
    flex-direction: row;

    & div:nth-child(1) {
      order: initial;
    }

    & div {
      margin-top: 0;
      padding-bottom: 0.5rem;
    }
  }
`;
