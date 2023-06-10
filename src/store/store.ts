import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { persistedCartReducer } from './features/cartSlice';
import userInputReducer from './features/userInputSlice';
import persistedFavoritesReducer from './features/favoritesSlice';

export const store = configureStore({
    reducer: {
       cart: persistedCartReducer,
       userInput: userInputReducer,
       favorites: persistedFavoritesReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
