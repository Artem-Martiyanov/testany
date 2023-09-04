import styled from "styled-components"
import {StyledButton} from "../../styled";

export const Button = styled(StyledButton)`
  padding: 5px 20px;
  border: 1px solid ${props => props.theme.colors.buttonPrimary};
  color: ${props => props.theme.colors.buttonPrimary};
  border-radius: 5px;
  background-color: #ffffff;
  transition: color ${props => props.theme.animationTransition},
  background-color ${props => props.theme.animationTransition};

  &:hover, &:focus-visible {
    color: #ffffff;
    background-color: ${props => props.theme.colors.buttonPrimary};
  }

  &:active {
    opacity: ${props => props.theme.buttonDownOpacity};
  }
`
