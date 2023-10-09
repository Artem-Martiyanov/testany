import {AppDispatch} from '../store'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'

import {app} from '../../firebase'
import {
  auth,
  authError,
  authOut,
  authOutError,
  authOutSuccess,
  authSuccess,
} from '../reducers/auth-slice'
import {fetchEnd, fetchStart} from '../reducers/app-slice'
import {clearUser, setUser} from '../reducers/user-slice'
import {IUser} from '../../models/IUser'


const authFireBase = getAuth(app)


const getUserNameAndRole = (userStr: string) => {
  if (userStr && userStr.split('::').length === 2) {
    return {
      name: userStr.split('::')[0],
      role: userStr.split('::')[1],
    }
  } else {
    throw new Error('Not correct name')
  }
}

export const authUser = (userData: IUser, type: 'register' | 'login') => async (dispatch: AppDispatch) => {
  try {
    await setPersistence(authFireBase, browserLocalPersistence)
    dispatch(auth(undefined))
    dispatch(setUser({name: userData.name, email: userData.email}))
    dispatch(fetchStart(undefined))
    let user
    
    switch (type) {
      case 'register': {
        const userInfo = await createUserWithEmailAndPassword(authFireBase, userData.email, userData.password || '')
        user = await userInfo.user
        await updateProfile(user, {displayName: `${userData.name}::common`})
        break
      }
      case 'login': {
        const userInfo = await signInWithEmailAndPassword(authFireBase, userData.email, userData.password || '')
        user = userInfo.user
        break
      }
    }
    
    dispatch(authSuccess(undefined))
    dispatch(setUser({
      ...getUserNameAndRole(user.displayName || ''),
      token: user.refreshToken,
      email: user.email,
    }))
  } catch (error: any) {
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd(undefined))
  }
}


export const authUserWithStorage = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(undefined))
    await setPersistence(authFireBase, browserLocalPersistence)
    if (authFireBase.currentUser?.refreshToken) {
      const userData = {
        ...getUserNameAndRole(authFireBase.currentUser?.displayName || ''),
        email: authFireBase.currentUser?.email || '',
        token: authFireBase.currentUser?.refreshToken || '',
      }
      dispatch(authSuccess(undefined))
      dispatch(setUser(userData))
    }
  } catch (error: any) {
    dispatch(authError(error.message))
  } finally {
    dispatch(fetchEnd(undefined))
  }
}


export const authOutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(undefined))
    dispatch(authOut(undefined))
    await signOut(authFireBase)
    dispatch(authOutSuccess(undefined))
    dispatch(clearUser(undefined))
  } catch (error: any) {
    dispatch(authOutError(error.message))
  } finally {
    dispatch(fetchEnd(undefined))
  }
}




