import React, {ChangeEvent, FC, MouseEventHandler} from 'react'
import {Button, Input, InputProps, Link} from '@skbkontur/react-ui'
import {Buttons, InputTitle, LoginFormWrapper} from './styles'
import {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import Validator from '../../tools/validator/Validator'
import {
  getConfirmPasswordMessage,
  getEmailMessage,
  getLoginMessage,
  getPasswordMessage,
  getTranslatedMessage,
} from './validate'
import {authUser} from '../../../store/action-creators/user-auth'

type inputsType = {
  email: string,
  name: string,
  password: string,
  confirm?: string,
}

const initAuthState: inputsType = {
  email: '',
  name: '',
  confirm: '',
  password: '',
}

interface AuthorizationFormTypes {
  isLogin: boolean,
  onClick: () => void
}

const AuthorizationForm: FC<AuthorizationFormTypes> = ({isLogin, onClick}) => {
  const dispatch = useAppDispatch()
  const authState = useAppSelector(state => state.auth)
  
  useEffect(() => {
    setErrorMessages({
      ...errorMessages,
      ...getTranslatedMessage(authState.error),
    })
  }, [authState.error])
  
  useEffect(() => setErrorMessages(initAuthState), [isLogin])
  
  const [user, setUser] = useState<inputsType>(initAuthState)
  const [errorMessages, setErrorMessages] = useState<inputsType>(initAuthState)
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => setUser({...user, [evt.target.name]: evt.target.value})
  const submitHandler: MouseEventHandler = (evt) => {
    evt.preventDefault()
    const isAllValid = (messagesArray: string[]) => messagesArray.every((message => !message.length))
    
    const currentErrorMessages = {
      email: getEmailMessage(user.email),
      password: getPasswordMessage(user.password),
      name: getLoginMessage(user.name),
      confirm: getConfirmPasswordMessage(user.password, user.confirm),
    }
    
    setErrorMessages(currentErrorMessages)
    
    const validationArray = isLogin
        ? [currentErrorMessages.email, currentErrorMessages.password]
        : Object.values(currentErrorMessages)
    
    if (isAllValid(validationArray)) {
      dispatch(authUser(user, isLogin ? 'login' : 'register'))
    }
  }
  
  
  const inputSettings = (name: string, type: string, placeholder: string) => ({
    type,
    name,
    placeholder,
    onChange: changeHandler,
    width: 'auto',
    // @ts-ignore
    error: errorMessages[name].length > 0,
  }) as InputProps
  
  return (
      <LoginFormWrapper action="/" method="post">
        {!isLogin &&
            <div>
              <InputTitle>Псевдоним</InputTitle>
              <Validator message={errorMessages.name}>
                <Input {...inputSettings('name', 'text', 'Введите псевдоним')}/>
              </Validator>
            </div>
        }
        <div>
          <InputTitle>Email</InputTitle>
          <Validator message={errorMessages.email}>
            <Input {...inputSettings('email', 'email', 'Введите email')}/>
          </Validator>
        </div>
        <div>
          <InputTitle>Пароль</InputTitle>
          <Validator message={errorMessages.password}>
            <Input {...inputSettings('password', 'password', 'Введите пароль')}/>
          </Validator>
        </div>
        {
            !isLogin &&
            <div>
              <InputTitle>Подтвердите пароль</InputTitle>
              <Validator message={errorMessages.confirm || ''}>
                <Input {...inputSettings('confirm', 'password', 'Повторите пароль')}/>
              </Validator>
            </div>
        }
        <Buttons>
          <Button type="submit" onClick={submitHandler}>{isLogin ? 'Войти' : 'Подтвердить'}</Button>
          <Link onClick={onClick}>{isLogin ? 'Зарегистрироваться' : 'Войти'}</Link>
        </Buttons>
      </LoginFormWrapper>
  )
}


export default React.memo(AuthorizationForm)