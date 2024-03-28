import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGenre } from '../store/genreSlice';
import { setGlobalRating } from '../store/ratingSlice';
import { RootState } from '../store/store';

const MyComponent: React.FC = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state: RootState) => state.genre.value);
  const rating = useSelector((state: RootState) => state.rating.value);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenre(event.target.value));
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGlobalRating(Number(event.target.value)));
  };

  return (
    <div>
      <h2>Genre and Rating Selector</h2>
      <div>
        <label>Genre:</label>
        <select value={genre} onChange={handleGenreChange}>
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          {/* Add more genre options as needed */}
        </select>
      </div>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={handleRatingChange}>
          <option value={0}>Select a rating</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>
    </div>
  );
};

export default MyComponent;