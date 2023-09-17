import {AppDispatch} from '../store'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
} from 'firebase/auth'

import {app} from '../../firebase'
import {
  userAuth,
  userAuthError,
  userAuthOut,
  userAuthOutError,
  userAuthOutSuccess,
  userAuthSuccess,
} from '../reducers/auth-slice'
import {IUser} from '../../models/IUser'
import {getSession, killSession, startSession} from '../../firebase/session'


const auth = getAuth(app)

export const authUser = (userData: IUser, type: 'register' | 'login') => async (dispatch: AppDispatch) => {
  try {
    dispatch(userAuth({name: userData.name, email: userData.email}))
    let user
    
    switch (type) {
      case 'register': {
        const userInfo = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        user = await userInfo.user
        await updateProfile(user, {displayName: userData.name})
        break
      }
      case 'login': {
        const userInfo = await signInWithEmailAndPassword(auth, userData.email, userData.password)
        user = userInfo.user
        break
      }
    }
    
    //TODO: получение роли
    
    startSession({...userData, name: user.displayName || ''}, user.refreshToken)
    
    dispatch(userAuthSuccess({...userData, role: 'root', name: user.displayName, password: '', confirm: ''}))
    
    
  } catch (error: any) {
    dispatch(userAuthError(error.message))
  }
}


export const authUserWithStorage = () => async (dispatch: AppDispatch) => {
  try {
    const userSession = getSession()
    
    
    //TODO: получение роли
    
    
    const userData = {
      name: userSession.userName || '',
      email: userSession.userEmail || '',
      token: userSession.userToken || '',
      role: 'root',
    }
    
    dispatch(userAuth(userData))
    dispatch(userAuthSuccess(userData))
  } catch (error: any) {
    dispatch(userAuthError(error.message))
  }
}


export const authOutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userAuthOut(undefined))
    await signOut(auth)
    dispatch(userAuthOutSuccess(undefined))
    killSession()
  } catch (error: any) {
    dispatch(userAuthOutError(error.message))
  }
}




