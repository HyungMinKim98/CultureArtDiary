// src/store/userSlice.ts 파일

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Gender, Genre } from '../components/Types'; // Gender와 Genre 타입을 임포트합니다.

// 초기 상태의 타입을 User 인터페이스로 설정합니다.
const initialState: User = {
  id: '0',
  nickname: '사용자',
  profilePhoto: '',
  genre: [], // Genre[] 타입으로 초기화합니다.
  gender: Gender.Male, // Gender 타입으로 초기화합니다.
  birthYear: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setProfilePhoto: (state, action: PayloadAction<string>) => {
      state.profilePhoto = action.payload;
    },
    setGenre: (state, action: PayloadAction<Genre[]>) => { // Genre[] 타입을 받습니다.
      state.genre = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => { // Gender 타입을 받습니다.
      state.gender = action.payload;
    },
    setBirthYear: (state, action: PayloadAction<string>) => {
      state.birthYear = action.payload;
    },
    updateUserProfile: (
      state,
      action: PayloadAction<{ nickname: string; profilePhoto: string; genre: Genre[]; gender: Gender; birthYear: string }>
    ) => {
      const { nickname, profilePhoto, genre, gender, birthYear } = action.payload;
      state.nickname = nickname;
      state.profilePhoto = profilePhoto;
      state.genre = genre;
      state.gender = gender;
      state.birthYear = birthYear;
    },
  },
});

export const { setNickname, setProfilePhoto, setGenre, setGender, setBirthYear, updateUserProfile } = userSlice.actions;

export default userSlice.reducer;