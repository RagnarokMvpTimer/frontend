import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
    //font-family: 'Nunito', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* :root {
    --test: '#fff';
  } */

  html {
    font-size: 62.5%;
  }

  body,
  button,
  input,
  textarea {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, input {
    border: 0;
  }

  button {
    cursor: pointer;
  }

  *:not(body,html)::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.scrollbar.bg};
  }

  *:not(body,html)::-webkit-scrollbar {
    width: 1.6rem;
  }

  *:not(body,html)::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: ${({ theme }) => theme.colors.scrollbar.thumb};
  }
`;
