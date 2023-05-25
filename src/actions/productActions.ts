// productActions.ts

import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { fetchProductsSuccess } from './productActions';
import mockProductData from './mockProductData';

export const fetchProducts = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch) => {
  // Simulate an API call delay (e.g., using setTimeout)
  setTimeout(() => {
    // Assuming the API call was successful, dispatch the success action with the mock product data
    dispatch(fetchProductsSuccess(mockProductData));
  }, 1000); // Simulated delay of 1 second
};
