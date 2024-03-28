import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './DiaryCreationPage.css';
import StarRating from './StarRating'; // Adjust the path as necessary
import { useDispatch } from 'react-redux';
import { setGenre } from '../../store/genreSlice'; // Adjust import path
import { setGlobalRating } from '../../store/ratingSlice'; // Adjust import path

type Genre = 'Action' | 'Comedy' | 'Drama' | 'Fantasy' | 'Horror' | 'Romance' | 'Thriller';

const DiaryCreationPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [rating, setRating] = useState<number>(0); // Adjust the state to store numeric value
  const navigate = useNavigate(); // useNavigate for navigation
  const dispatch = useDispatch(); 

  const genres: Genre[] = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Thriller'];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setGenre(selectedGenre));
    dispatch(setGlobalRating(rating)); // Use the renamed action creator import

    console.log({ title, body, selectedGenre, rating });
      navigate('/'); // Use navigate to redirect to the main page
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
            <StarRating rating={rating} setRating={setRating} />
          </div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiaryCreationPage;