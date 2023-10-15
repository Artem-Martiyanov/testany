import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {defaultUser, IUser} from '../../models/IUser'


interface UserState {
  user: IUser,
}


const initialState: UserState = {
  user: defaultUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = initialState.user
    },
  },
})


export const {
  setUser,
  clearUser,
} = userSlice.actions
