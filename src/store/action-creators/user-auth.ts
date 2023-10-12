import {AppDispatch} from '../store'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'

import {app} from '../../firebase'
import {
  authStart,
  authError,
  authOut,
  authOutError,
  authOutSuccess,
  authSuccess,
} from '../reducers/auth-slice'
import {fetchEnd, fetchStart} from '../reducers/app-slice'
import {clearUser, setUser} from '../reducers/user-slice'
import {defaultUser, IUser} from '../../models/IUser'
import {getUserDataFromDataBase, setUserInDataBase} from '../../firebase/fetch-users'

const auth = getAuth(app)


export const authUser = (userData: IUser, type: 'register' | 'login') => async (dispatch: AppDispatch) => {
  try {
    await setPersistence(auth, browserLocalPersistence)
    dispatch(authStart(null))
    dispatch(fetchStart(null))
    
    switch (type) {
      case 'register': {
        const userInfo = await createUserWithEmailAndPassword(auth, userData.email, userData.password || '')
        const user = await userInfo.user
        
        await setUserInDataBase({
          ...defaultUser,
          name: userData.name || '',
          email: user.email || '',
          token: user.refreshToken,
        })
        
        break
      }
      case 'login': {
        await signInWithEmailAndPassword(auth, userData.email, userData.password || '')
        break
      }
    }
    
    const user = await getUserDataFromDataBase()
    
    dispatch(authSuccess(null))
    dispatch(setUser(user))
  } catch (error: any) {
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd(null))
  }
}


export const authUserWithStorage = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(null))
    const user = await getUserDataFromDataBase()
    
    if (user.token) {
      dispatch(authSuccess(null))
      dispatch(setUser(user))
    }
    
  } catch (error: any) {
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd(null))
  }
}

export const authOutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(null))
    dispatch(authOut(null))
    await signOut(auth)
    dispatch(authOutSuccess(null))
    dispatch(clearUser(null))
  } catch (error: any) {
    dispatch(authOutError(error.message))
  } finally {
    dispatch(fetchEnd(null))
  }
}




