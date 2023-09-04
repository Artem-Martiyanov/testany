import {AppDispatch} from "../store";
import {productsFetching, productsFetchingError, productsFetchingSuccess} from "../reducers/products-slice";
import {IProduct} from "../../models/models";
import {loadData, Url} from "../api/api";


export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsFetching())
    const products: IProduct[] = await loadData(Url.PRODUCTS)
    dispatch(productsFetchingSuccess(products))
  } catch (err) {
    dispatch(productsFetchingError(err.message))
  }
}
