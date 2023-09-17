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
  fetchEnd,
  userAuth,
  userAuthError,
  userAuthOut,
  userAuthOutError,
  userAuthOutSuccess,
  userAuthSuccess,
} from '../reducers/auth-slice'
import {IUser} from '../../models/IUser'


const auth = getAuth(app)


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
    await setPersistence(auth, browserLocalPersistence)
    dispatch(userAuth({name: userData.name, email: userData.email}))
    let user
    
    switch (type) {
      case 'register': {
        const userInfo = await createUserWithEmailAndPassword(auth, userData.email, userData.password || '')
        user = await userInfo.user
        await updateProfile(user, {displayName: `${userData.name}::common`})
        break
      }
      case 'login': {
        const userInfo = await signInWithEmailAndPassword(auth, userData.email, userData.password || '')
        user = userInfo.user
        break
      }
    }
    
    dispatch(userAuthSuccess({
      ...getUserNameAndRole(user.displayName || ''),
      token: user.refreshToken,
      email: user.email,
    }))
  } catch (error: any) {
    dispatch(userAuthError(error.message))
  }
}


export const authUserWithStorage = () => async (dispatch: AppDispatch) => {
  try {
    
    await setPersistence(auth, browserLocalPersistence)
    if (auth.currentUser?.refreshToken) {
      const userData = {
        ...getUserNameAndRole(auth.currentUser?.displayName || ''),
        email: auth.currentUser?.email || '',
        token: auth.currentUser?.refreshToken || '',
      }
      dispatch(userAuthSuccess(userData))
    }
  
    dispatch(fetchEnd(undefined))
  } catch (error: any) {
    
    dispatch(userAuthError(error.message))
  }
}


export const authOutUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userAuthOut(undefined))
    await signOut(auth)
    dispatch(userAuthOutSuccess(undefined))
  } catch (error: any) {
    dispatch(userAuthOutError(error.message))
  }
}




