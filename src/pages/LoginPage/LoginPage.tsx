import React, { useEffect } from 'react';
import './LoginPage.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"; 
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

const LoginPage = () => {
  // Placeholder functions for handling other social logins
  const handleGoogleLogin = () => {
    console.log('Log in with Google');
    // Implement Google login logic here
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
        redirectUri: 'http://localhost:3000/pages/LoginPage/LoginPage.tsx'
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