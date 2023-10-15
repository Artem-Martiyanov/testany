import React, {ChangeEvent, FC, useState} from 'react'
import {InputTitle} from '../authorization-form/styles'
import Validator from '../../tools/validator/Validator'
import {Button, Input, InputProps} from '@skbkontur/react-ui'
import {ChangeForm} from './styles'
import {
  getConfirmPasswordMessage,
  getPasswordMessage,
} from '../../tools/validator/validate'
import {useAppDispatch} from '../../../store/hooks'
import {userChangePassword} from '../../../store/action-creators/user-auth'

interface ChangePasswordFormTypes {

}

type inputsType = {
  password: string,
  confirm: string,
}

const initFieldsState: inputsType = {
  confirm: '',
  password: '',
}

const ChangePasswordForm: FC<ChangePasswordFormTypes> = () => {
  const dispatch = useAppDispatch()
  
  
  const [errorMessages, setErrorMessages] = useState<inputsType>(initFieldsState)
  const [field, setField] = useState(initFieldsState)
  
  
  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    const currentErrorMessages = {
      password: getPasswordMessage(field.password),
      confirm: getConfirmPasswordMessage(field.password, field.confirm),
    }
    setErrorMessages(currentErrorMessages)
    
    if (Object.values(currentErrorMessages).every(message => !message.length)) {
      dispatch(userChangePassword(field.password))
    }
  }
  
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setField({...field, [evt.target.name]: evt.target.value})
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
      <>
        <ChangeForm action="/" method="post" onSubmit={submitHandler}>
          <InputTitle>Новый пароль</InputTitle>
          <Validator message={errorMessages.password}>
            <Input {...inputSettings('password', 'password', 'Введите новый пароль')}/>
          </Validator>
          <InputTitle>Новый пароль ещё раз</InputTitle>
          <Validator message={errorMessages.confirm || ''}>
            <Input {...inputSettings('confirm', 'password', 'Повторите новый пароль')}/>
          </Validator>
          <Button type="submit">Подтвердить</Button>
        </ChangeForm>
      </>
  )
}

export default React.memo(ChangePasswordForm)