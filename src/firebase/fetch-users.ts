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
  
  try {
    const snapshot = await get(child(ref(getDatabase()), `${DataBaseUrl.USERS}/${uid}`))
    if (snapshot.exists()) {
      userData = snapshot.val()
    }
    
  } catch (e) {
    console.log(e)
  }
  return userData as IUser
}


export const setUserInDataBase = async (user: IUser) => {
  
  try {
    await setPersistence(auth, browserLocalPersistence)
    const uid = auth.currentUser?.uid
    await set(ref(db, `users/${uid}`), user)
  } catch (e) {
    console.log(e)
  }
  
}

export const setUserParameterInDataBase = async (parameterName: string, parameterValue: any) => {
  try {
    await setPersistence(auth, browserLocalPersistence)
    const uid = auth.currentUser?.uid
    await set(ref(db, `users/${uid}/${parameterName}`), parameterValue)
  } catch (e) {
    console.log(e)
  }
  
}