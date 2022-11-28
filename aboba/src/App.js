import React, { useEffect } from 'react'
import './style.css'
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';
import { useNavigate } from 'react-router-dom';

const { Routes, Route } = require('react-router-dom');

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/editprofile' element={<EditUserPage />} />
        <Route path='/newevent' element={<NewEventPage />} />
        <Route path='/settingscalendar' element={<NewEventPage />} />
        <Route path='/reset_password' element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
