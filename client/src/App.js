import React, { Suspense } from 'react';
import { Route} from "react-router-dom";
import Auth from "../src/hoc/auth";
// pages for this product
import MainPage from "../src/pages/MainPage/MainPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import RegisterPage from "../src/pages/RegisterPage/RegisterPage";
import NavBar from "../src/pages/NavBar/NavBar";
import Footer from "../src/components/Footer"
import UserPage from '../src/pages/UserPage/UserPage';
import CalendarPage from '../src/pages/CalendarPage/CalendarPage';
import DiaryCreationPage from '../src/pages/DiaryCreationPage/DiaryCreationPage';
import DetailPage from '../src/pages/DetailPage/DetailPage';


const Layout=() => {
  return (
    <>
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Route>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/userpage" component={Auth(UserPage, false)} />
          <Route exact path="/calendearpage" component={Auth(CalendarPage, false)} />
          <Route exact path="/diarycreationpage" component={Auth(DiaryCreationPage, false)} />
          <Route exact path="/detailpage" component={Auth(DetailPage, false)} />
        </Route>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;