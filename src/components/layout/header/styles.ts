import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'
import {Container} from '../../styled'
import userProfileImage from '../../../assets/images/user-profile.png'

export const StyledHeader = styled.header`
  padding: ${({theme}) => theme.indent} 0;
  background-color: color-mix(in srgb, ${({theme}) => theme.colors.mainPrimary}, transparent 70%);
  width: 100%;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({theme}) => theme.colors.textPrimary};
`

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${userProfileImage}) no-repeat center;
  background-size: contain;
  
  img {
    box-shadow: 0 0 0 1000px #ffffff;
  }
`