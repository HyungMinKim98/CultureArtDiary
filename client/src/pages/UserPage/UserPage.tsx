// UserPage.tsx

import React, { useState } from 'react';
import './UserPage.css'; // UserPage.css 파일을 import합니다.

const UserPage: React.FC = () => {
  const entriesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePic(e.target.files[0]);
    }
  };

  const diaryEntries = [
    { date: "2024-03-21", title: "A Day at the Museum", author: "User" },
    { date: "2024-03-15", title: "Exploring Street Art", author: "User" },
    { date: "2024-03-10", title: "Classical Concert Experience", author: "User" },
    { date: "2024-03-07", title: "A Day at the Museum", author: "User" },
    { date: "2024-03-03", title: "Exploring Street Art", author: "User" },
    { date: "2024-03-01", title: "Classical Concert Experience", author: "User" },
    // Add more diary entries
  ];

  const pageCount = Math.ceil(diaryEntries.length / entriesPerPage);

  const currentEntries = diaryEntries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handler to change page
  const setPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1>Welcome to Your Profile</h1>
        <p>View and manage your diary entries here.</p>
      </div>

      <div className="profile-section">
        <div className="profile-info">
          <h2>Your Profile</h2>
          <div className="profile-pic-container">
            {profilePic ? (
              <img src={URL.createObjectURL(profilePic)} alt="Profile" className="profile-pic" />
            ) : (
              <div className="default-profile-pic">
                <i className="fas fa-user-circle"></i>
              </div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
        </div>
      </div>

      <div className="diary-entries-section">
        <h2>Your Diary Entries</h2>
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
        <a href="/diarycreation" className="create-diary-button">Create Diary Entry</a>
      </div>
    </div>
  );
};

export default UserPage;