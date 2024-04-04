// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import diaryReducer from './diarySlice';

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
});

// Type for the state
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch
export type AppDispatch = typeof store.dispatch;