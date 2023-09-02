import {css} from "styled-components";
import RobotoRegularWoff from '././Roboto-Regular.woff'
import RobotoRegularWoff2 from '././Roboto-Regular.woff2'
import RobotoBoldWoff from '././Roboto-Bold.woff'
import RobotoBoldWoff2 from '././Roboto-Bold.woff2'


const fonts = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegularWoff2}) format("woff2"), url(${RobotoRegularWoff}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url(${RobotoBoldWoff2}) format("woff2"), url(${RobotoBoldWoff}) format("woff");
    font-display: swap;
  }
`


export default fonts
