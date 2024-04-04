// src/store/dateSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiaryState {
  genre: string;
  rating: number;
  date: string;
}

// Define the initial state using that type
const initialState: DiaryState = {
  genre: '',
  rating: 0,
  date: '',
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
  },
});
// Action creators are generated for each case reducer function
export const { setGenre, setRating, setDate } = diarySlice.actions;

export default diarySlice.reducer;