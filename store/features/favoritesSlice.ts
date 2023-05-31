import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/../../interfaces'; // Use your own type for Product

interface FavoritesState {
  favoritesItems: Product[];
}

const initialState: FavoritesState = {
  favoritesItems: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      state.favoritesItems.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<Product>) => {
      state.favoritesItems = state.favoritesItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
