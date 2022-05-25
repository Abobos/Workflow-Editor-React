import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 100%;

  @media screen and (min-width: 900px) {
    font-size: 90%;
  }

  @media screen and (min-width: 1200px) {
    font-size: 100%;
  }

  @media screen and (min-width: 1800px) {
    font-size: 110%;
  }
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  font-weight: 400;
  background-color: whitesmoke;
  color: black;
}
`;
