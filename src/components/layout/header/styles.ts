import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'
import {Container} from '../../styled'

export const StyledHeader = styled.header`
  padding: ${({theme}) => theme.indent} 0;
  background-color: color-mix(in srgb, ${({theme}) => theme.colors.mainPrimary}, transparent 70%);
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  gap: ${({theme}) => theme.indent};
  align-items: center;
`

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${({theme}) => theme.colors.buttonPrimary};
  }
`

export const UserNav = styled.nav`
  display: flex;
  gap: ${({theme}) => theme.indent};
  align-items: center;
`

export const UserName = styled(Link)`
  color: ${({theme}) => theme.colors.textPrimary};
`