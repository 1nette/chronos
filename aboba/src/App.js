import React from 'react'
// import ArrowDown from './components/Button/Arrows/ArrowDown';
// import ArrowLeft from './components/Button/Arrows/ArrowLeft';
// import ArrowRight from './components/Button/Arrows/ArrowRight';
import CalendarsList from './components/Lists/CalendarsList/CalendarsList';
import NavigationBar from './components/Navigation/NavigationBar';
import './style.css'
function App() {
  return (
    <div className="App">

      {/* <ArrowLeft />
      <ArrowDown />
      <ArrowRight /> */}

      <NavigationBar />
      <CalendarsList />
    </div>
  );
}

export default App;
