import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${props => props.theme.indent};
  row-gap: 10px;
  align-items: center;
`

export const User = styled.p`
  margin: 0;
`


