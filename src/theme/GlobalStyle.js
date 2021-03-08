import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.styles.fontFamily.fira};
    padding: 0;
    margin: 0;
  }
  ${normalize}
  html, body {
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  body {
    color: ${({ theme }) => theme.defaultTheme.color};
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;