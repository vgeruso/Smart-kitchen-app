import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    body {
      background: #fff;
      color: #000;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Segoe UI', 'Roboto', serif;
      font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }

    a, a:visited {
      background: transparent;
      border-radius: 6px;
      padding: 0.5vw 0.8vw;
      font-size: 1vw;
      transition: all 0.2s;
      text-decoration: none;
    }
  }
`;