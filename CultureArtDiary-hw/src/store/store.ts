import { configureStore } from '@reduxjs/toolkit';
import genreReducer from './genreSlice';
import ratingReducer from './ratingSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    genre: genreReducer,
    rating: ratingReducer,
  },
});