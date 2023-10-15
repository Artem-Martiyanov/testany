import {AppDispatch} from '../store'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  setPersistence,
  updatePassword,
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
import {setPopupMessage} from '../reducers/popup-slice'
import {getTranslatedMessage} from '../../components/tools/validator/validate'
import firebase from 'firebase/compat'

const auth = getAuth(app)


export const authUser = (userData: IUser, type: 'register' | 'login') => async (dispatch: AppDispatch) => {
  try {
    await setPersistence(auth, browserLocalPersistence)
    dispatch(authStart())
    dispatch(fetchStart())
    
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
    
    dispatch(authSuccess())
    dispatch(setUser(user))
  } catch (error: any) {
    console.error('authUser: ' + error.message)
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd())
  }
}

export const userChangePassword = (newPassword: string) => async (dispatch: AppDispatch) => {
  try {
    if (auth.currentUser) {
      dispatch(fetchStart())
      await updatePassword(auth.currentUser, newPassword)
      dispatch(setPopupMessage({message: 'Пароль успешно изменён', type: 'success'}))
    }
  } catch (error: any) {
    dispatch(setPopupMessage({message: getTranslatedMessage(error.message).password, type: 'error'}))
  } finally {
    dispatch(fetchEnd())
  }
}


export const authUserWithStorage = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart())
    const user = await getUserDataFromDataBase()
    
    if (user.token) {
      dispatch(authSuccess())
      dispatch(setUser(user))
    }
    
  } catch (error: any) {
    console.error('authUserWithStorage: ' + error.message)
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd())
  }
}

export const authOutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart())
    dispatch(authOut())
    await signOut(auth)
    dispatch(authOutSuccess())
    dispatch(clearUser())
  } catch (error: any) {
    dispatch(authOutError(error.message))
  } finally {
    dispatch(fetchEnd())
  }
}




