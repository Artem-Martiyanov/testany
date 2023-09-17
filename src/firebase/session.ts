import {IUser} from '../models/IUser'


interface SessionTypes {
  userEmail: string | null,
  userName: string | null,
  userToken: string | null
}

export const startSession: (user: IUser, token: string) => void = (user, token) => {
  localStorage.setItem('user-email', user.email)
  localStorage.setItem('user-name', user.name)
  localStorage.setItem('user-token', token)
}



export const getSession: () => SessionTypes = () => {
  return {
    userEmail: localStorage.getItem('user-email'),
    userName: localStorage.getItem('user-name'),
    userToken: localStorage.getItem('user-token')
  }
}

export const killSession: () => void = () => {
  localStorage.clear()
}

export const isAuth: () => boolean = () => !!localStorage.getItem('user-token')
