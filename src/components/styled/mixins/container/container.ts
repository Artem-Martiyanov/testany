import {css} from "styled-components";

const container = css`

  padding-left: ${props => props.theme.indent};
  padding-right: ${props => props.theme.indent};

  @media (${props => props.theme.media.tablet}) {
    margin: 0 auto;
    max-width: ${props => props.theme.containerWidth.tablet};
  }

  @media (${props => props.theme.media.desktop}) {
    max-width: ${props => props.theme.containerWidth.desktop};
  }


`


export default container
