import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray: rgb(240, 240, 240);
    --blue: rgb(0, 0, 138);
    --red: rgb(201, 0, 0);
    --yellow: rgb(209, 209, 0);
    --green: rgb(1, 119, 1);
    --gameOverColor: rgb(190, 23, 23);
  }


  * {
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
  }

  body {
    background-color: var(--gray);
    font-family: 'Roboto Mono', monospace;
  }
`;