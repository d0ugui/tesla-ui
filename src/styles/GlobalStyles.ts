import { createGlobalStyle } from 'styled-components';

export const GlobalStyls = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
`;
