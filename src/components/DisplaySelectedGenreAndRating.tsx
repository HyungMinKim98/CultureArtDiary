import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust import path

const DisplaySelectedGenreAndRating: React.FC = () => {
  const genre = useSelector((state: RootState) => state.genre.value);
  const rating = useSelector((state: RootState) => state.rating.value);

  return (
    <div>
      <p>Selected Genre: {genre}</p>
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default DisplaySelectedGenreAndRating;