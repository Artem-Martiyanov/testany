import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit'
import {IUser, Role} from '../../models/IUser'


interface AuthState {
  isAuth: boolean,
  user: IUser,
  error: string
}


const initialState: AuthState = {
  isAuth: false,
  error: '',
  user: {
    email: '',
    name: '',
    password: '',
    role: '',
    token: ''
  },
}

export const authSlice: Slice<AuthState> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userAuth: (state, action: PayloadAction<IUser>) => {
      state.error = ''
      state.user = action.payload
    },
    userAuthSuccess: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true
      state.error = ''
      state.user = action.payload
    },
    userAuthError: (state, action: PayloadAction<string>) => {
      state.isAuth = false
      state.error = action.payload
    },
    
    userAuthOut: (state) => {
      state.error = ''
    },
    userAuthOutSuccess: (state) => {
      state.isAuth = false
      state.user = initialState.user
    },
    userAuthOutError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
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
} = authSlice.actions
