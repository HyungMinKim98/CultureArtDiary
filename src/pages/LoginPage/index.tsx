import React from 'react';
import './LoginPage.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"; 
import { SiNaver } from "react-icons/si"; // Generic Icons as placeholders
import { RiKakaoTalkFill } from "react-icons/ri";



const LoginPage = () => {
  // Placeholder functions for handling social logins
  // Replace these with your actual login logic
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

  const handleKakaoLogin = () => {
    console.log('Log in with KakaoTalk');
    // Implement KakaoTalk login logic here
  };
  // You can add similar functions for other social providers

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
