import styled from "styled-components";
import container from "../../styled/mixins/container/container";

export const StyledFooter = styled.footer`
  height: 50px;
  background-color: ${props => props.theme.colors.mainSecondary};
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  ${container};
  width: 100%;
`
