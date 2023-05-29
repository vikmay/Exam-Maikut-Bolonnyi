// Redux Toolkit library and Persist library imports
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../interfaces";
import { RootState } from "../store";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define CartState Interface 
export interface CartState {
  cartItems: CartItem[];
}

// Initial State of the Cart
const initialState: CartState = {
  cartItems: [],
};

// Define Redux Slice for the Cart
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      // Increment product quantity in the cart, if it exists
      // else add the product to the cart
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      // Decrement product quantity in the cart, if it exists
      // If the quantity is zero after decrement, remove the product from the cart
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },

    remove: (state, action: PayloadAction<Product>) => {
      // Remove the product from the cart
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload.id
      );
    },

    emptyCart: (state) => {
      // Empty the cart
      state.cartItems = [];
    },
  },
});

// Configuration for redux-persist
const persistConfig = {
  key: "cart",
  storage,
};

// Create persisted reducer
export const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

// Create Selector to get cartItems from state
const cartItems = (state: RootState) => state.cart.cartItems;

// Create Selector to get quantity of a specific product in cart
export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

// Create Selector to get total quantity of products in cart
export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

// Create Selector to get total price of products in cart
export const TotalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems
    .reduce(
      (total: number, curr: CartItem) =>
        (total += curr.qty * curr.product.price),
      0
    )
    .toFixed(2)
);

// Export actions for use in application
export const { increment, decrement, remove, emptyCart } = cartSlice.actions;

// Export reducer for use in application
export default cartSlice.reducer;
