import React from 'react'
import './style.css'
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';

const { BrowserRouter, Routes, Route } = require('react-router-dom');

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/editprofile' element={<EditUserPage />} />
          <Route path='/newevent' element={<NewEventPage />} />
          <Route path='/reset_password' element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
