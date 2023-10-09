import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'


interface UserState {
  user: IUser,
  fetching: boolean,
  error: string,
  image: string,
}


const initialState: UserState = {
  error: '',
  fetching: true,
  image: '',
  user: {
    email: '',
    name: '',
    role: '',
    token: ''
  },
}

export const userSlice: Slice<UserState> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchEnd: (state) => {
      state.fetching = false
    },
    
    userAuth: (state, action: PayloadAction<IUser>) => {
      state.error = ''
      state.user = action.payload
      state.fetching = true
    },
    userAuthSuccess: (state, action: PayloadAction<IUser>) => {
      state.error = ''
      state.user = action.payload
      state.fetching = false
    },
    userAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.fetching = false
    },
    
    userAuthOut: (state) => {
      state.error = ''
      state.fetching = true
    },
    userAuthOutSuccess: (state) => {
      state.user = initialState.user
      state.fetching = false
    },
    userAuthOutError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.fetching = false
    },
  },
})


export const {
  userAuth,
  userAuthSuccess,
  userAuthError,
  userAuthOut,
  userAuthOutSuccess,
  userAuthOutError,
  fetchEnd,
} = userSlice.actions
