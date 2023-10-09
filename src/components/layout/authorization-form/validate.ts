import {checkFunctions} from '../../tools/validator/validate-functions'


export const getEmailMessage = (input: string) => {
  let result = ''
  if (!checkFunctions.email(input)) {
    result = 'Введен некорректный email'
  }
  
  if (!checkFunctions.minInputLength(input, 6)) {
    result = 'Минимум: 6 символов'
  }
  return result as string
}


export const getPasswordMessage = (input: string) => {
  let result = ''
  
  if (!checkFunctions.minInputLength(input, 6)) {
    result = 'Минимум: 6 символов'
  }
  return result as string
}

export const getLoginMessage = (input: string) => {
  let result = ''
  
  if (!checkFunctions.noSpecialSign(input)) {
    result = 'Псевдоним не должен содержать " :: "'
  }
  
  if (!checkFunctions.minInputLength(input, 2)) {
    result = 'Минимум: 2 символа'
  }
  return result as string
}

export const getConfirmPasswordMessage = (firstInput: string = '', secondInput: string = '') => {
  let result = ''
  
  if (!checkFunctions.compareValues(firstInput, secondInput)) {
    result = 'Пароли должны совпадать'
  }
  return result as string
}


export const getTranslatedMessage = (serverError: string) => {
  const emailDictionary: { [key: string]: string } = {
    'Firebase: Error (auth/email-already-in-use).': 'Такой email уже зарегистрирован',
    'Firebase: Error (auth/user-not-found).': 'Пользователь с таким email не найден...',
  }
  
  const passwordDictionary: { [key: string]: string } = {
    'Firebase: Error (auth/wrong-password).': 'Неверный пароль',
  }
  
  return {
    email: emailDictionary[serverError] || '',
    password: passwordDictionary[serverError] || '',
  } as { email: string, password: string }
}

