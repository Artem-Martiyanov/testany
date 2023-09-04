import {AppDispatch} from "../store";
import {productsFetching, productsFetchingError, productsFetchingSuccess} from "../reducers/products-slice";
import {IProduct} from "../../models/models";

const BASE_URL = 'https://fakestoreapi.com/products/'


export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(BASE_URL)
    dispatch(productsFetching())
    if (response.ok) {
      const data: IProduct[] = await response.json()
      dispatch(productsFetchingSuccess(data))
    }
  } catch (err) {
    dispatch(productsFetchingError(err.message))
  }
}
