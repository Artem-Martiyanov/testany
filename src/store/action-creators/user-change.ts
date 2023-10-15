import {AppDispatch} from '../store'


import {app} from '../../firebase'
import {getDownloadURL, getStorage, ref, uploadBytes, deleteObject} from 'firebase/storage'
import {store} from '../store'

import {fetchEnd, fetchStart} from '../reducers/app-slice'
import {setUser} from '../reducers/user-slice'
import {ImageSettings, IUser} from '../../models/IUser'
import {browserLocalPersistence, getAuth, setPersistence} from 'firebase/auth'
import {setUserInDataBase, setUserParameterInDataBase} from '../../firebase/fetch-users'
import {DataBaseUrl} from '../../firebase/db-url'


const storage = getStorage(app)
const auth = getAuth(app)


export const changeUserData = (newData: Partial<IUser>) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(undefined))
    
    const newUserData = {
      ...store.getState().user.user,
      ...newData,
    }
    
    await setUserInDataBase(newUserData)
    dispatch(setUser(newUserData))
  } catch (error: any) {
  
  
  } finally {
    dispatch(fetchEnd(undefined))
  }
}

export const changeUserAvatar = (imageFile: File | null, settings: ImageSettings) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchStart(undefined))
    await setPersistence(auth, browserLocalPersistence)
    const userId = auth.currentUser?.uid || ''
    
    const mountainUserRef = ref(storage, `${DataBaseUrl.USERS}/${userId}/avatar`)
    
    if (imageFile) {
      await uploadBytes(mountainUserRef, imageFile)
    } else {
      await deleteObject(mountainUserRef)
    }
    
    const avatarUrl = await getDownloadURL(mountainUserRef)
    
    await setUserParameterInDataBase('avatar', {image: avatarUrl, settings: settings})
    
    
    dispatch(setUser({
      ...store.getState().user.user,
      avatar: {
        image: avatarUrl,
        settings: settings,
      },
    }))
    
  } catch (error: any) {
    console.error(error)
  } finally {
    dispatch(fetchEnd(undefined))
  }
}




