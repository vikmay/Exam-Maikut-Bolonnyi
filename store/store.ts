// Import necessary Redux functionalities and libraries
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// Import the persisted reducer from your cart slice
import { persistedCartReducer } from './features/cartSlice';
// Import redux-persist's function to create a persisted store
import { persistStore } from 'redux-persist';

// Create your Redux store, using your persisted cart reducer
export const store = configureStore({
    reducer: {
       cart: persistedCartReducer, 
    },
});

// Create a persistor using redux-persist's `persistStore` function and the Redux store you just created
// The persistor will be used in conjunction with the PersistGate component to ensure the Redux state is 
// saved and rehydrated across page reloads
export const persistor = persistStore(store);

// Define RootState and AppDispatch types for use throughout your application
// RootState is the type of the complete Redux state tree
// AppDispatch is the type of your store's dispatch function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create typed versions of the `useDispatch` and `useSelector` hooks from Redux 
// These will provide TypeScript type checking capabilities when dispatching actions and selecting state
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
