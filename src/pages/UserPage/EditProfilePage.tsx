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
  const user = useSelector((state: RootState) => state.user);

  const [nickname, setNickname] = useState(user.nickname);
  const [gender, setGender] = useState(user.gender);
  const [birthYear, setBirthYear] = useState(user.birthYear);
  const [genres, setGenres] = useState(user.genre);

    // 사용자의 기존 정보를 반영
    useEffect(() => {
      setNickname(user.nickname);
      setGender(user.gender);
      setBirthYear(user.birthYear);
      setGenres(user.genre);
    }, [user]);

    
// 장르 변경 처리
const handleGenreChange = (selectedGenre: Genre) => {
  if (genres.includes(selectedGenre)) {
      // 이미 선택된 장르를 다시 클릭하면 제거
      setGenres(genres.filter(genre => genre !== selectedGenre));
  } else if (genres.length < 3) {
      // 최대 3개의 장르까지 선택 가능
      setGenres([...genres, selectedGenre]);
  } else {
      // 3개 이상 선택할 수 없으므로 경고 또는 무시
      console.log("최대 3개의 장르만 선택 가능합니다.");
  }
};

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateUserProfile({ 
      nickname, 
      profilePhoto: user.profilePhoto, // 프로필 사진 업데이트 로직이 필요하면 추가
      genre: genres,
      gender, 
      birthYear 
    }));
    console.log('Updated user profile:', { nickname, genre: genres, gender, birthYear });
    navigate('/user'); // 수정 후 사용자 프로필 페이지로 리다이렉션
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateUserProfile({ ...user, gender: event.target.value as Gender }));
  };

  const handleBirthYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateUserProfile({ ...user, birthYear: event.target.value }));
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUserProfile({ ...user, nickname: event.target.value }));
  };



  return (
    <div className="edit-profile-container">
      <form onSubmit={handleSubmit}>
        <label>
          닉네임:
          <input type="text" value={user.nickname} onChange={handleNicknameChange} />
        </label>
        <label>
          성별:
          <select value={user.gender} onChange={handleGenderChange}>
            {Object.values(Gender).map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </label>
        <label>
          생년:
          <select value={user.birthYear} onChange={handleBirthYearChange}>
            {Array.from(new Array(100)).map((_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
        </label>
        <fieldset>
          <legend>관심 장르:</legend>
          {Object.values(Genre).map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                checked={user.genre.includes(genre)}
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
