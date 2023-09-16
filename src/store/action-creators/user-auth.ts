import {AppDispatch} from '../store'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {app} from '../../firebase'
import {userAuth, userAuthError, userAuthSuccess} from '../reducers/auth-slice'
import {IUser} from '../../models/IUser'
import {AnyAction} from '@reduxjs/toolkit'


const auth = getAuth(app)

type authAction = (userData: IUser, type: 'register' | 'login') => AnyAction

// @ts-ignore
export const authUser: authAction = (userData, type) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userAuth({name: userData.name, email: userData.email}))
    let user = {}
    switch (type) {
      case 'register': {
        user = await (await createUserWithEmailAndPassword(auth, userData.email, userData.password)).user
        break
      }
      case 'login': {
        user = await (await signInWithEmailAndPassword(auth, userData.email, userData.password)).user
        break
      }
    }
    dispatch(userAuthSuccess({name: 'Artem', role: 'root'}))
  } catch (error: any) {
    dispatch(userAuthError(error.message))
  }
}




