//src > components> DisplaySelectedGenreAndRating.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust import path

const DisplaySelectedGenreAndRating: React.FC = () => {
  const { genre, rating } = useSelector((state: RootState) => state.diary);

  return (
    <div>
      <p>Selected Genre: {genre}</p>
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default DisplaySelectedGenreAndRating;