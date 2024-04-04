import React, { useState, useEffect } from 'react';
import './MainPage.css'; // 같은 디렉토리에 이 CSS 파일이 있어야 합니다.
import { useNavigate } from 'react-router-dom';
import { Media } from '../../components/mediaTypes'; // Media 타입을 정의한 파일에서 import

const MainPage = () => {
  const entriesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Media[]>([]);
  const [dramas, setDramas] = useState<Media[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=50aaab29ad70cc1875e49e7512650e80&language=ko-KO&page=1');
        const data = await response.json();
        if (data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error('영화 불러오기 에러:', error);
      }
    };

    const fetchDramas = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=50aaab29ad70cc1875e49e7512650e80&language=ko-KO&page=1');
        const data = await response.json();
        if (data.results) {
          setDramas(data.results);
        }
      } catch (error) {
        console.error('드라마 불러오기 에러:', error);
      }
    };

    fetchMovies();
    fetchDramas();
  }, []);

  const diaryEntries = [
    { date: "2024-03-10", title: "박물관에서 하루", author: "Alex" },
    { date: "2024-03-12", title: "거리 예술 탐험", author: "Jordan" },
    { date: "2024-03-15", title: "클래식 음악회 체험", author: "Casey" },
    { date: "2024-03-10", title: "박물관에서 하루", author: "Alex" },
    { date: "2024-03-12", title: "거리 예술 탐험", author: "Jordan" },
    { date: "2024-03-15", title: "클래식 음악회 체험", author: "Casey" },
    // 더 많은 다이어리 항목 추가
  ];
  const pageCount = Math.ceil(diaryEntries.length / entriesPerPage);

  const currentEntries = diaryEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // 페이지 변경 핸들러
  const setPage = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1>컬처 아트 다이어리에 오신 것을 환영합니다</h1>
        <p>문화적, 예술적 경험을 발견하고 공유하세요.</p>
      </div>

      <div className="diary-entries-section">
        <h2>최근 다이어리 항목</h2>
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>제목</th>
              <th>작성자</th>
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
        <a href="/diarycreation" className="create-diary-button">다이어리 항목 만들기</a>
      </div>

      <div className="featured-section">
        <h2>주요 영화</h2>
        <div className="scrollable-entries">
          {movies.map((movie, index) => (
            <div className="entry" key={index} onClick={() => navigate(`/detail/movie/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-section">
        <h2>주요 드라마</h2>
        <div className="scrollable-entries">
          {dramas.map((drama, index) => (
            <div className="entry" key={index} onClick={() => navigate(`/detail/drama/${drama.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500${drama.poster_path}`} alt={drama.title} />
              <p>{drama.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
