import React from 'react';
import NavBar from './components/header/NavBar';
import Home from './components/Home/Home';
import { Outlet } from 'react-router-dom';
import bgImg from './assets/Rectangle1.png'
const App = () => {
  // console.log(App)
  return (
    <div style={{backgroundImage : `url(${bgImg})`}} className='  bg-fixed bg-cover h-screen'>
      <div className="h-screen bg-[#353333] bg-opacity-70">
        <NavBar />
        <Outlet />
      </div>

    </div>
  );
};

export default App;