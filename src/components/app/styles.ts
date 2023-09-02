import {createGlobalStyle} from "styled-components";

import fonts from "../../assets/fonts/fonts";

const GlobalStyles = createGlobalStyle`
  ${fonts}
  html {
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.fontRoboto};
    margin: 0;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`


export default GlobalStyles
