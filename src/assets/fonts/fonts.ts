import {css} from "styled-components";
import regularWoff from './Roboto-Regular.woff'
import regularWoff2 from './Roboto-Regular.woff2'
import boldWoff from './Roboto-Bold.woff'
import boldWoff2 from './Roboto-Bold.woff2'

const fonts = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url(${regularWoff2}) format("woff2"), url(${regularWoff}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url(${boldWoff2}) format("woff2"), url(${boldWoff}) format("woff");
    font-display: swap;
  }
`


export default fonts