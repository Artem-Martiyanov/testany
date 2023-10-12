import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit'


interface AuthState {
  isAuth: boolean,
  error: string
}


const initialState: AuthState = {
  isAuth: false,
  error: '',
}

export const authSlice: Slice<AuthState> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state) => {
      state.error = ''
    },
    authSuccess: (state) => {
      state.isAuth = true
      state.error = ''
    },
    authError: (state, action: PayloadAction<string>) => {
      state.isAuth = false
      state.error = action.payload
    },
    authOut: (state) => {
      state.error = ''
    },
    authOutSuccess: (state) => {
      state.isAuth = false
    },
    authOutError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})


export const {
  authStart,
  authSuccess,
  authError,
  authOut,
  authOutSuccess,
  authOutError,
} = authSlice.actions
