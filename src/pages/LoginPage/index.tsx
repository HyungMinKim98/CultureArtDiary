import React, { useEffect } from 'react';

// global.d.ts 파일에 추가
declare namespace Kakao {
  function init(apiKey: string): void;
  namespace Auth {
    function authorize(options: { redirectUri: string }): void;
  }
}


const KakaoLogin = () => {
  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Kakao SDK 초기화
      Kakao.init('3edd23cd46ae62025e6c3b4444931dad');     //저의 개인 카카오 api 키 값입니다. 추후 보안파일로 키 값 가릴 예정, 개인 정보 보호 부탁~~
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loginWithKakao = () => {
    console.log("hello");
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/pages/LoginPage/index.tsx'
    });
  };

  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
