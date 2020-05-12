import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body, p, label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${props => props.theme.background};
    min-height: 100%;
    min-width: 100%;
    color: ${props => props.theme.font};
    text-align: center;
    box-sizing: border-box;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
