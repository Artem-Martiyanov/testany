import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'


interface AuthState {
  isAuth: boolean,
  fetching: boolean,
  user: IUser,
  error: string
}


const initialState: AuthState = {
  isAuth: false,
  error: '',
  fetching: true,
  user: {
    email: '',
    name: '',
    role: '',
    token: ''
  },
}

export const authSlice: Slice<AuthState> = createSlice({
  name: 'auth',
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
      state.isAuth = true
      state.error = ''
      state.user = action.payload
      state.fetching = false
    },
    userAuthError: (state, action: PayloadAction<string>) => {
      state.isAuth = false
      state.error = action.payload
      state.fetching = false
    },
    
    userAuthOut: (state) => {
      state.error = ''
      state.fetching = true
    },
    userAuthOutSuccess: (state) => {
      state.isAuth = false
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
} = authSlice.actions
