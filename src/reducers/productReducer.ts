// productReducer.ts

import { FETCH_PRODUCTS_SUCCESS } from '../constants/actionTypes';

const initialState: Product[] = [];

const productReducer = (state = initialState, action: Action): Product[] => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
