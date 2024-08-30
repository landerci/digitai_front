import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
  }
  *,
  button,
  h1, h2, h3, h4, h5, h6 {
    
  }
  input {
    border: 0;
    outline: 0;
    font-family: 'Roboto Condensed, sans-serif';
  }
  html, body {
    font-size:72.5%;
    font-family: 'Roboto Condensed, sans-serif';
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
      :hover {
        color: inherit;
      }
    }
  }
`;

export default GlobalStyles;
