import * as React from 'react';
import TextInput from "../../ui/text-input/TextInput";
import {FormEvent, useState} from "react";
import {Control, FormWrapper} from "./styles";
import Button from "../../ui/button/Button";


enum Fields {
  NAME = 'name',
  PASSWORD = 'password',
  PASSWORD_AGAIN = 'password-again'
}

type Props = {
  onSubmit: Function,
  isRegister?: boolean
}


const LoginForm = ({onSubmit, isRegister = true}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const inputUsernameHandler = (value) => {
    setUsername(value)
  }
  const inputPasswordHandler = (value) => {
    setPassword(value.trim())
  }

  const inputPasswordAgainHandler = (value) => {
    setPasswordAgain(value.trim())
  }

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const data = {}
    formData.forEach((value, key) => data[key] = value)
    onSubmit(data)
    setPassword('')
    setUsername('')
    inputPasswordAgainHandler('')
  }


  return (
    <FormWrapper onSubmit={submitHandler}>
      <Control>
        <label htmlFor={Fields.NAME}>Имя</label>
        <TextInput
          name={Fields.NAME}
          placeholder='Введите имя'
          type='text'
          id={Fields.NAME}
          required={true}
          onInput={inputUsernameHandler}
          value={username}
        />
      </Control>
      <Control>
        <label htmlFor={Fields.PASSWORD}>Пароль</label>
        <TextInput
          name={Fields.PASSWORD}
          placeholder='Введите пароль'
          type="password"
          id={Fields.PASSWORD}
          required={true}
          onInput={inputPasswordHandler}
          value={password}
        />
      </Control>
      {isRegister &&
        <Control>
          <label htmlFor={Fields.PASSWORD_AGAIN}>Повторите пароль</label>
          <TextInput
            name={Fields.PASSWORD_AGAIN}
            placeholder='Введите пароль ещё раз'
            type="password"
            id={Fields.PASSWORD_AGAIN}
            required={true}
            onInput={inputPasswordAgainHandler}
            value={passwordAgain}
          />
        </Control>}
      <Button
        type="submit"
        onClick={() => {
      }}
      >
        {isRegister ? 'Зарегистрироваться' : 'Войти'}

      </Button>

    </FormWrapper>
  );
};

export default LoginForm;

