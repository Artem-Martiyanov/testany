import * as React from 'react'
import {Avatar, HeaderContainer, Nav, StyledHeader, StyledLink, UserName, UserNav} from './styles'
import {Button} from '@skbkontur/react-ui'
import {AppRoute} from '../../../routes'
import {useEffect, useState} from 'react'
import Modal from '../../ui/modal/Modal'
import Title from '../../ui/title/Title'
import {Size} from '../../ui/title/styles'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import AuthorizationForm from '../../blocks/authorization-form/AuthorizationForm'
import {authOutUser} from '../../../store/action-creators/user-auth'
import Image from '../../ui/image/Image'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  
  const authState = useAppSelector(state => state.auth)
  const userState = useAppSelector(state => state.user)
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  
  useEffect(() => {
    if (authState.isAuth) {
      setIsModalVisible(false)
    }
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
              <UserName to={AppRoute.PERSONAL}>
                {authState.isAuth &&
                    <>
                      <Avatar $isAvatarLoaded={!!userState.user.avatar?.image}>
                        {userState.user.avatar?.image &&
                            <Image
                                src={userState.user.avatar?.image}
                                offset={userState.user.avatar?.settings.offset}
                                scale={userState.user.avatar?.settings.scale}
                                alt="Аватар."
                            />
                        }
                      </Avatar>
                      {userState.user.name}
                    </>
                }
              </UserName>
              {authState.isAuth ?
                  <Button onClick={() => dispatch(authOutUser())}>Выйти</Button>
                  :
                  <Button onClick={() => setIsModalVisible(true)}>Войти</Button>
              }
            </UserNav>
          </HeaderContainer>
        </StyledHeader>
        {isModalVisible &&
            <Modal title={<Title size={Size.SMALL} level={'h3'}>{isLogin ? 'Вход' : 'Регистрация'}</Title>}
                   onClose={() => setIsModalVisible(false)}>
              <AuthorizationForm isLogin={isLogin} onClick={() => setIsLogin(!isLogin)}/>
            </Modal>}
      </>
  )
}
export default React.memo(Header)