import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./reducers/auth-slice";
import {userSlice} from './reducers/user-slice'
import {appSlice} from './reducers/app-slice'
import {popupSlice} from './reducers/popup-slice'


export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
    popup: popupSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store