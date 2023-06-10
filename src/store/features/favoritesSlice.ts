import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Product } from "@/../../interfaces";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // defaults to localStorage for web
import { RootState } from "../store";

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
        const newProduct = { ...action.payload, isFavorite: true };
        state.favoritesItems.push(newProduct);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      const newProduct = { ...action.payload, isFavorite: false };
      state.favoritesItems = state.favoritesItems.filter(
        (item) => item.id !== newProduct.id
      );
    },
    emptyFavorites: (state) => {
      state.favoritesItems.forEach(product => product.isFavorite = false);
      state.favoritesItems = [];
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);

export const {
  addToFavorites,
  removeFromFavorites,
  emptyFavorites,
} = favoritesSlice.actions;

// Selector to get favoritesItems from state
const favItems = (state: RootState) => state.favorites.favoritesItems;

// Selector to get total number of favorite items
export const totalFavItemsSelector = createSelector([favItems], (favItems) =>
  favItems.length
);

export default persistedFavoritesReducer;
