import {configureStore} from "@reduxjs/toolkit";
import {productsSlice} from "./reducers/products-slice";
import {authSlice} from "./reducers/auth-slice";


export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch

