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
        state.favoritesItems.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      state.favoritesItems = state.favoritesItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    emptyFavorites: (state) => {
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
