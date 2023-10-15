import {browserLocalPersistence, getAuth, setPersistence} from 'firebase/auth'
import {getDatabase, set, get, child} from 'firebase/database'
import {ref} from '@firebase/database'
import {IUser} from '../models/IUser'
import {app} from './index'
import {DataBaseUrl} from './db-url'


const auth = getAuth(app)
const db = getDatabase()


export const getUserDataFromDataBase = async () => {
  await setPersistence(auth, browserLocalPersistence)
  const uid = auth.currentUser?.uid
  let userData = {}
  
  if (uid) {
    try {
      const snapshot = await get(child(ref(getDatabase()), `${DataBaseUrl.USERS}/${uid}`))
      if (snapshot.exists()) {
        userData = snapshot.val()
      }
      
    } catch (e: any) {
      console.error('getUserDataFromDataBase: ' + e.message)
    }
  }
  
  return userData as IUser
}


export const setUserInDataBase = async (user: IUser) => {
  
  try {
    await setPersistence(auth, browserLocalPersistence)
    const uid = auth.currentUser?.uid
    await set(ref(db, `users/${uid}`), user)
  } catch (e: any) {
    console.error('setUserInDataBase: ' + e.message)
  }
  
}

export const setUserParameterInDataBase = async (parameterName: string, parameterValue: any) => {
  try {
    await setPersistence(auth, browserLocalPersistence)
    const uid = auth.currentUser?.uid
    if (uid) {
      await set(ref(db, `users/${uid}/${parameterName}`), parameterValue)
    }
  } catch (e: any) {
    console.log('setUserParameterInDataBase: ' + e.message)
  }
  
}