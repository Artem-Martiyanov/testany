import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {IProduct} from "../../models/models";

interface ProductsState {
  products: IProduct[],
  isLoading: boolean,
  error: string
}


const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: ''
}

export const productsSlice: Slice<ProductsState> = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetching: (state) => {
      state.isLoading = true
    },
    productsFetchingSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false
      state.products = action.payload
    },
    productsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    productsSortByRating: (state) => {
      state.products = [...state.products].sort((a, b) => b.rating.rate - a.rating.rate)
    },
    productsSortByName: (state) => {
      state.products = [...state.products].sort((a, b) => a.title.localeCompare(b.title))
    },
    productsSortByPrice: (state) => {
      state.products = [...state.products].sort((a, b) => b.price - a.price)
    }
  }
})


export const {
  productsFetching,
  productsFetchingSuccess,
  productsFetchingError,
  productsSortByRating,
  productsSortByName,
  productsSortByPrice
} = productsSlice.actions
