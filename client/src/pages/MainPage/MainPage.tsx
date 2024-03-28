import React, { useState } from 'react';
import './MainPage.css'; // Ensure you have this CSS file in the same directory

const MainPage = () => {

  const entriesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const diaryEntries = [
    { date: "2024-03-10", title: "A Day at the Museum", author: "Alex" },
    { date: "2024-03-12", title: "Exploring Street Art", author: "Jordan" },
    { date: "2024-03-15", title: "Classical Concert Experience", author: "Casey" },
    { date: "2024-03-10", title: "A Day at the Museum", author: "Alex" },
    { date: "2024-03-12", title: "Exploring Street Art", author: "Jordan" },
    { date: "2024-03-15", title: "Classical Concert Experience", author: "Casey" },
    // Add more diary entries
  ];
  const pageCount = Math.ceil(diaryEntries.length / entriesPerPage);

  const currentEntries = diaryEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handler to change page
  const setPage = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };


  // Dummy data for movies and dramas. Replace these with real data as needed.
  const movies = [
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    { title: "Movie 1", image: "/img/movieExample.jpg" },
    // Add more movies
  ];

  const dramas = [
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    { title: "Drama 1", image: "/img/dramaExample.jpg" },
    // Add more dramas
  ];

  return (
    <div className="main-container">
      <div className="header">
        <h1>Welcome to CultureArtDiary</h1>
        <p>Discover and share your cultural and artistic experiences.</p>
      </div>

      <div className="diary-entries-section">
        <h2>Recent Diary Entries</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.title}</td>
                <td>{entry.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
            <button key={number} onClick={() => setPage(number)} className={currentPage === number ? 'active' : ''}>
              {number}
            </button>
          ))}
        </div>
        <a href="/diarycreation" className="create-diary-button">Create Your Diary Entry</a>

      </div>
       <div className="featured-section">
        <h2>Featured Movies</h2>
        <div className="scrollable-entries">
          {movies.map((movie, index) => (
            <div className="entry" key={index}>
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-section">
        <h2>Featured Dramas</h2>
        <div className="scrollable-entries">
          {dramas.map((drama, index) => (
            <div className="entry" key={index}>
              <img src={drama.image} alt={drama.title} />
              <p>{drama.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;