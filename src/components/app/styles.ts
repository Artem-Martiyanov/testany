import {createGlobalStyle} from "styled-components";

import fonts from "../../assets/fonts/fonts";

const GlobalStyles = createGlobalStyle`
  ${fonts}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: ${props => props.theme.fontRoboto};
    margin: 0;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    min-width: 320px;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`


export default GlobalStyles
