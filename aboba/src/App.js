import React, { useEffect, useContext} from 'react'
import './style.css'
import { Context } from '.';
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';
import { useNavigate } from 'react-router-dom';

const { Routes, Route } = require('react-router-dom');

function App() {
  let navigate = useNavigate();
  const { store } = useContext(Context)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
    
    // if (!store.isAuth) {
    //   navigate('/')
    // }
    // else {
    //   navigate('/home')
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!store.isAuth) {
    return(
      <LoginPage />
    )   
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/editprofile' element={<EditUserPage />} />
        <Route path='/newevent' element={<NewEventPage />} />
        <Route path='/reset_password' element={<ResetPasswordPage />} />
      </Routes>
    </div>
  );
}

export default App;
