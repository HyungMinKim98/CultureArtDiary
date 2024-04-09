// src>pages>LoginPage>LoginPage.tsx
import React, { useEffect } from 'react';
import '../../firebase'; // Firebase 초기화 먼저 임포트
import './LoginPage.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"; 
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigate 사용
  // Placeholder functions for handling other social logins
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google 로그인 성공
        console.log(result.user);
        navigate('/'); // 메인 페이지로 리다이렉션
        // 성공 후 로직, 예를 들어 메인 페이지로 리다이렉션
      })
      .catch((error) => {
        // 로그인 실패 처리
        console.error(error);
      });
  };

  const handleFacebookLogin = () => {
    console.log('Log in with Facebook');
    // Implement Facebook login logic here
  };

  const handleNaverLogin = () => {
    console.log('Log in with Naver');
    // Implement Naver login logic here
  };

  // Load Kakao SDK script and initialize
  useEffect(() => {
    // Check if Kakao script is already loaded
    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize Kakao JS SDK
        window.Kakao.init('3edd23cd46ae62025e6c3b4444931dad');
      };

      return () => {
        document.body.removeChild(script);
      };
    } else if (!window.Kakao.isInitialized()) {
      // Initialize if not initialized yet
      window.Kakao.init('3edd23cd46ae62025e6c3b4444931dad');
    }
  }, []);

  const handleKakaoLogin = () => {
    console.log('Log in with KakaoTalk');
    // Directly invoke the login function if Kakao SDK is loaded and initialized
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/pages/LoginPage/index.tsx'
      });
    }
  };

  return (
    <div className="login-container">
      <div className="social-login-form">
        <h2>Login</h2>
        <div className="social-login-buttons">
          <button onClick={handleGoogleLogin} className="social-button google">
            <FcGoogle className='icon' /> 구글로 시작하기
          </button>
          <button onClick={handleFacebookLogin} className="social-button facebook">
            <FaFacebook className='icon'/> 페이스북으로 시작하기
          </button>
          <button onClick={handleNaverLogin} className="social-button naver">
            <SiNaver className='icon'/> 네이버로 시작하기
          </button>
          <button onClick={handleKakaoLogin} className="social-button kakao">
            <RiKakaoTalkFill className='icon' /> 카카오톡으로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;