// src/store/diarySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

interface DiaryState {
  genre: string;
  rating: number;
  date: string;
}

const initialState: DiaryState = {
  genre: '',
  rating: 0,
  date: getCurrentDate(), // 현재 날짜를 기본값으로 설정
};

export const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    // New action to update all three states at once
    updateDiary: (state, action: PayloadAction<{ genre: string; rating: number; date: string }>) => {
      const { genre, rating, date } = action.payload;
      state.genre = genre;
      state.rating = rating;
      state.date = date;
    },
  },
});

export const { setGenre, setRating, setDate, updateDiary } = diarySlice.actions;

export default diarySlice.reducer;
