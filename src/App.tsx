import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage/index';
import LoginPage from './pages/LoginPage/index';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import UserPage from './pages/UserPage/index';
import CalendarPage from './pages/CalendarPage';
import DiaryCreationPage from './pages/DiaryCreationPage';

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

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
