import * as React from 'react'
import {HeaderContainer, Nav, StyledHeader, StyledLink, UserName, UserNav} from './styles'
import {Button} from '@skbkontur/react-ui'
import {AppRoute} from '../../../routes'
import {useEffect, useState} from 'react'
import Modal from '../../ui/modal/Modal'
import Title from '../../ui/title/Title'
import {Size} from '../../ui/title/styles'
import {useAppSelector} from '../../../store/hooks'
import AuthorizationForm from '../authorization-form/AuthorizationForm'

const Header: React.FC = () => {
  const authState = useAppSelector(state => state.auth)
  
  const [modal, setModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  
  useEffect(() => {
    setModal(false)
  }, [authState.isAuth])
  
  return (
      <>
        <StyledHeader>
          <HeaderContainer>
            <Nav>
              <StyledLink to={AppRoute.MAIN}>Главная</StyledLink>
              <StyledLink to={AppRoute.EDITOR}>Редактор</StyledLink>
              <StyledLink to={AppRoute.CATALOG}>Тесты</StyledLink>
            </Nav>
            <UserNav>
              <UserName to={AppRoute.PERSONAL}>{authState.user.name}</UserName>
              <Button onClick={() => {
                setModal(true)
              }}>{authState.isAuth ? 'Выйти' : 'Войти'}</Button>
            </UserNav>
          </HeaderContainer> </StyledHeader> {modal &&
          <Modal title={<Title size={Size.SMALL} level={'h3'}>{isLogin ? 'Вход' : 'Регистрация'}</Title>}
                 onClose={() => setModal(false)}>
            <AuthorizationForm isLogin={isLogin} onClick={() => setIsLogin(!isLogin)}/>
          </Modal>}
      </>
  )
}
export default React.memo(Header)