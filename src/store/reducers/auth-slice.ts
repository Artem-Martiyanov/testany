import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {IUser} from "../../models/IUser";



interface AuthState {
  role: 'root' | 'user' | '',
  isAuth: boolean,
  user: IUser,
  error: string
}


const initialState: AuthState = {
  role: '',
  isAuth: false,
  error: '',
  user: {
    email: '',
    name: '',
    password: ''
  },
};

export const authSlice: Slice<AuthState> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userAuth: (state, action: PayloadAction<IUser>) => {
      state.error = ''
      state.user = action.payload
    },
    
    userAuthSuccess: (state, action: PayloadAction<{ name: string, role: string }>) => {
      state.isAuth = true
      state.error = ''
      state.user.name = action.payload.name
    },
    
    userAuthError: (state, action: PayloadAction<string>) => {
      state.isAuth = false
      state.error = action.payload
    }
  },
});


export const {
  userAuth,
  userAuthSuccess,
  userAuthError,
} = authSlice.actions;
