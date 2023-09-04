import styled from "styled-components";
import {Ul} from '../../styled'
import {NavLink} from "react-router-dom";

export const StyledNav = styled.nav`
  height: 100%;
  padding-right: ${props => props.theme.indent};
`

export const NavList = styled(Ul)`
  display: flex;
  gap: ${props => props.theme.indent};
  height: 100%;
  align-items: center;
`

export const NavItem = styled.li`
`


export const NavLinkComponent = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  padding: 5px;

  &.active {
    text-decoration: underline;
  }

`
