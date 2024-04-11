 // src/pages/DetailPage/DetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Media } from '../../components/Types';
import './DetailPage.css';

const DetailPage = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [details, setDetails] = useState<Media | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'https://api.themoviedb.org/3';
      const apiKey = '50aaab29ad70cc1875e49e7512650e80';
      const url = `${baseUrl}/${type === 'movie' ? 'movie' : 'tv'}/${id}?api_key=${apiKey}&language=ko-KO`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setDetails({
          id: data.id.toString(),
          title: data.title || data.name, // Movies have 'title', TV shows have 'name'
          poster_path: data.poster_path,
          overview: data.overview,
          releaseDate: data.release_date || data.first_air_date, // Use release_date for movies and first_air_date for TV shows
          genres: data.genres.map((genre: { id: number }) => genre.id),
          originalLanguage: data.original_language,
          popularity: data.popularity,
          voteAverage: data.vote_average,
          voteCount: data.vote_count,
        });
      } catch (error) {
        console.error(`Error fetching ${type} details:`, error);
      }
    };

    fetchData();
  }, [type, id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-header">
        <h1>{details.title}</h1>
      </div>
      <div className="detail-content">
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} className="detail-poster" />
        <div className="detail-info">
          <p><strong>ID:</strong> {details.id}</p>
          <p><strong>Overview:</strong> {details.overview}</p>
          <p><strong>Release Date:</strong> {details.releaseDate}</p>
          <p><strong>Original Language:</strong> {details.originalLanguage}</p>
          <p><strong>Popularity:</strong> {details.popularity}</p>
          <p><strong>Vote Average:</strong> {details.voteAverage}</p>
          <p><strong>Vote Count:</strong> {details.voteCount}</p>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
