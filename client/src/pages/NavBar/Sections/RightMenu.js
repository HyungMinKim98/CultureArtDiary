import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function RightMenu(props) {
  const user = useSelector(state => state.user);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        navigate("/login"); // 페이지 이동을 navigate로 변경
      } else {
        alert('Log Out Failed');
      }
    });
  };

  if (user.userData && user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="userName">
          {user.userData.name}
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link> {/* <a> 태그를 <Link>로 변경 */}
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link> {/* <a> 태그를 <Link>로 변경 */}
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
