// src>pages>UserPage>EditProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { User, Genre, Gender } from '../../components/Types';
import { updateUserProfile } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import './EditProfilePage.css'; // 필요에 따라 CSS 파일 생성
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const EditProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname, gender, birthYear, genre: genres, profilePhoto } = useSelector((state: RootState) => state.user);

  const [editedNickname, setEditedNickname] = useState(nickname);
  const [editedGender, setEditedGender] = useState(gender);
  const [editedBirthYear, setEditedBirthYear] = useState(birthYear);
  const [editedGenres, setEditedGenres] = useState(genres);
  
// 장르 변경 처리
const handleGenreChange = (selectedGenre: Genre) => {
  const isGenreSelected = editedGenres.includes(selectedGenre);
  if (isGenreSelected) {
    // 이미 선택된 장르를 다시 클릭하면 제거
    setEditedGenres(editedGenres.filter(genre => genre !== selectedGenre));
  } else if (editedGenres.length < 3) {
    // 최대 3개의 장르까지 선택 가능
      setEditedGenres([...editedGenres, selectedGenre]);
    } else {
      // 3개 이상 선택할 수 없으므로 경고 또는 무시
      console.log("최대 3개의 장르만 선택 가능합니다.");
  }
};

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateUserProfile({ 
      nickname: editedNickname, 
      profilePhoto, 
      genre: editedGenres,
      gender: editedGender, 
      birthYear: editedBirthYear 
    }));
    console.log('Updated user profile:', { nickname, genre: genres, gender, birthYear });
    navigate('/user'); // 수정 후 사용자 프로필 페이지로 리다이렉션
  };

  return (
    <div className="edit-profile-container">
      <form onSubmit={handleSubmit}>
        <label>
          닉네임:
          <input type="text" value={editedNickname} onChange={e => setEditedNickname(e.target.value)}/>
        </label>
        <label>
          성별:
          <select value={editedGender} onChange={e => setEditedGender(e.target.value as Gender)}>
            {Object.values(Gender).map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </label>
        <label>
          생년:
          <select value={editedBirthYear} onChange={e => setEditedBirthYear(e.target.value)}>
          {Array.from({length: 100}, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={String(year)}>{year}</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend>관심 장르:</legend>
          {Object.values(Genre).map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                checked={editedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              {genre}
            </label>
          ))}
        </fieldset>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
