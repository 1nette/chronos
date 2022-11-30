import React from 'react'
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';
import SettingsCalendarsPage from './views/SettingsCalendarsPage/SettingsCalendarsPage';

import './style.css'

const { Routes, Route } = require('react-router-dom');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={localStorage.getItem('token') == null ? <LoginPage /> : <HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/editprofile' element={<EditUserPage />} />
        <Route path='/newevent' element={<NewEventPage />} />
        <Route path='/settingscalendar' element={<SettingsCalendarsPage />} />
        <Route path='/reset_password' element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
