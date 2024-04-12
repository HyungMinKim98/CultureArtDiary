//src>pages>DiaryCreationPage>DiaryCreationPage.tsx

import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './DiaryCreationPage.css';
import StarRating from './StarRating'; // Adjust the path as necessary
import { useDispatch, useSelector } from 'react-redux';
import { updateDiary } from '../../store/diarySlice';

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'Thriller';

const DiaryCreationPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [diaryDate, setDiaryDate] = useState(''); // 사용자가 선택한 날짜를 관리하는 상태
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRating, setSelectedRating] = useState(0); // Assuming rating is a number

  const genres: Genre[] = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Thriller'];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateDiary({
      genre: selectedGenre,
      rating: selectedRating,
      date: diaryDate // 여기서 사용자가 선택한 날짜를 전달합니다.
    }));
    console.log({ title, body, selectedGenre, selectedRating, diaryDate });
    navigate('/'); // Navigate to the main page
  };

  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePic(event.target.files[0]);
    }
  };

  

  return (
    <div className="diary-creation-page">
      <h2>Diary Entry Creation</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="half-width">
            <h3>Genre</h3>
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
          <div className="half-width">
            <h3>Rating</h3>
            <StarRating rating={selectedRating} setRating={setSelectedRating} />
          </div>
        </div>
        <div>
          <h3>Date</h3>
          <input
            type="date"
            value={diaryDate}
            onChange={(e) => setDiaryDate(e.target.value)}
            />
        </div>
        <div>
          <h3>Title</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your diary title"
          />
        </div>
        <div>
          <h3>Body</h3>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div>
          <h3>Profile Picture</h3>
          <input
            type="file"
            onChange={handleProfilePicChange}
          />
          {profilePic && (
            <img src={URL.createObjectURL(profilePic)} alt="Profile" className="profile-pic-preview" />
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiaryCreationPage;