import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppSelector} from '../../../store/hooks'
import {AppRoute} from '../../../routes'
import Container from '../../styled/container/Container'
import userProfileImage from '../../../assets/images/user-profile.png'
import {Button} from '@skbkontur/react-ui'

const PersonalPage: FC = () => {
  const [show, setShow] = useState(false)
  const authState = useAppSelector(state => state.auth)
  const setLocation = useNavigate()
  
  
  useEffect(() => {
    if (!authState.isAuth) {
      setLocation(AppRoute.MAIN)
    }
  }, [authState.isAuth, setLocation])
  
  
  
  
  return (
      <Container>
        <div>
          <img src={userProfileImage} width={250} height={250} alt="Аватар."/>
          <label>
            Сменить аватар <input type="file" accept="image/png, image/jpeg" onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            if (evt.target.files && evt.target.files.length) {
              const userAvatar: File = evt.target.files[0]
              
              console.dir(userAvatar)
              
            }
            
          }
          }/>
          </label>
        </div>
        
        
        <p>Имя: <b>{authState.user.name}</b></p>
        <p>Email: <b>{authState.user.email}</b></p>
        <p>Роль: <b>{authState.user.role}</b></p>
        
        
        {authState.user.role === 'root' &&
            <Button onClick={() => {
              setShow(true)
            }}>Кнопка Админа</Button>
        }
        {show ? <div>
          Привет, Админ!
        </div> : ''}
      </Container>
  )
}

export default React.memo(PersonalPage)