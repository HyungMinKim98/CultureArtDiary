import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RatingState {
  value: number;
}

const initialState: RatingState = {
  value: 0,
};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setGlobalRating: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setGlobalRating } = ratingSlice.actions;
export default ratingSlice.reducer;