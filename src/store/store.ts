import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./reducers/auth-slice";
import {userSlice} from './reducers/user-slice'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch