import React from 'react'
import './style.css'
import HomePage from './views/HomePage/HomePage';
// import CalendarService from './service/calendar_service';
const calendar = require('./service/calendar_service');

function App() {
  const acal = calendar
  console.log(acal)

  return (
    <div className="App">


      <HomePage />
    </div>
  );
}

export default App;
