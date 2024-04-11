import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import UserPage from './pages/UserPage/UserPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import DiaryCreationPage from './pages/DiaryCreationPage/DiaryCreationPage';
import DetailPage from './pages/DetailPage/DetailPage';
import './firebase'; // Firebase 초기화
import EditProfilePage from './pages/UserPage/EditProfilePage';

const Layout = () => {
  return(
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Outlet />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='login' element= {<LoginPage />} />
          <Route path='diarycreation' element= {<DiaryCreationPage />} />
          <Route path='calendar' element= {<CalendarPage />} />
          <Route path='user' element= {<UserPage />} />
          <Route path='edit-profile' element= {<EditProfilePage />} />
          <Route path='detail/:type/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
