import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/../../interfaces";

interface FavoritesState {
  favoritesItems: Product[];
}

const initialState: FavoritesState = {
  favoritesItems: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const productExists = state.favoritesItems.some(
        (item) => item.id === action.payload.id
      );
      if (!productExists) {
        // Set isFavorite to true on the product before pushing it to the array
        const newProduct = { ...action.payload, isFavorite: true };
        state.favoritesItems.push(newProduct);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      // Set isFavorite to false on the product before removing it from the array
      const newProduct = { ...action.payload, isFavorite: false };
      state.favoritesItems = state.favoritesItems.filter(
        (item) => item.id !== newProduct.id
      );
    },
    emptyFavorites: (state) => {
      // Set isFavorite to false on all products in the array
      state.favoritesItems.forEach(product => product.isFavorite = false);
      state.favoritesItems = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  emptyFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

