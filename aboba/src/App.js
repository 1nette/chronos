import React from 'react'
import './style.css'
import HomePage from './views/HomePage/HomePage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';

const { BrowserRouter, Routes, Route } = require('react-router-dom');

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/editprofile' element={<EditUserPage />} />
          <Route path='/newevent' element={<NewEventPage />} />
        </Routes>
      </BrowserRouter>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
