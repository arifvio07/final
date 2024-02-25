import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fetchData from '../features/Shop Data/shopData';
import dataReducer from '../features/Sneaker/sneakerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data : fetchData,
    shoes : dataReducer,
  },
});
