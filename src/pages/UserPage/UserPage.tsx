// src > pages> UserPage> UserPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 사용
import './UserPage.css'; // UserPage.css 파일을 import합니다.
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../store/userSlice';
import { RootState } from '../../store/store';


const UserPage: React.FC = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  // 프로필 사진 변경 핸들러
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const profilePhotoUrl = URL.createObjectURL(e.target.files[0]);
      dispatch(updateUserProfile({ ...user, profilePhoto: profilePhotoUrl }));
    }
  };

   // 수정 페이지로 이동하는 함수
   const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <h1>{user.nickname}님의 프로필</h1>
        <p>당신의 관심사와 프로필을 관리하세요.</p>
      </div>

      <div className="profile-section">
      <h2 className="profile-title">프로필 정보</h2>
        <div className="profile-info">
          <div className="profile-pic-container">
            {profilePic ? (
              <img src={URL.createObjectURL(profilePic)} alt="Profile" className="profile-pic" />
            ) : (
              <div className="default-profile-pic">
                <i className="fas fa-user-circle"></i>
              </div>
            )}
          </div>
          <div className="user-info">
            <p><strong>이름:</strong> {user.nickname}</p>
            <p><strong>성별:</strong> {user.gender}</p>
            <p><strong>생년:</strong> {user.birthYear}</p>
            <p><strong>장르:</strong> {user.genre.join(', ')}</p>
       
            <div className="file-input-container">
              <input type="file" accept="image/*" onChange={handleProfilePicChange} />
            </div>
            <button onClick={handleEditProfile} className="edit-button">프로필 수정</button>
        </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;