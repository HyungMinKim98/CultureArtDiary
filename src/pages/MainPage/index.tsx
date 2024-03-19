import React from 'react';
import './MainPage.css'; // Ensure you have this CSS file in the same directory

const MainPage = () => {
  // Dummy data for movies and dramas. Replace these with real data as needed.
  const movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6'];
  const dramas = ['Drama 1', 'Drama 2', 'Drama 3', 'Drama 4', 'Drama 5', 'Drama 6'];

  return (
    <div className="main-container">
      <div className="header">
        <h1>Welcome to CultureArtDiary</h1>
        <p>Discover and share your cultural and artistic experiences.</p>
        <a href="/diarycreation" className="create-diary-button">Create Your Diary Entry</a>
      </div>

      <div className="featured-section">
        <h2>Featured Movies</h2>
        <div className="entries">
          {movies.map((movie, index) => (
            <div className="entry" key={index}>{movie}</div>
          ))}
        </div>
      </div>

      <div className="featured-section">
        <h2>Featured Dramas</h2>
        <div className="entries">
          {dramas.map((drama, index) => (
            <div className="entry" key={index}>{drama}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;