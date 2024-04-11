// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // userSlice 리듀서를 임포트합니다.
import diaryReducer from './diarySlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // user 리듀서를 추가합니다.
    diary: diaryReducer,
  },
});

// Type for the state
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch
export type AppDispatch = typeof store.dispatch;