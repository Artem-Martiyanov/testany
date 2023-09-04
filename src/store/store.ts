import {configureStore} from "@reduxjs/toolkit";
import {productsSlice} from "./reducers/products-slice";


export const store = configureStore({
  reducer: {
    products: productsSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch

