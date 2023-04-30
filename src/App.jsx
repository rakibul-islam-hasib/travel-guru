import React from 'react';
import NavBar from './components/header/NavBar';

const App = () => {
  return (
    <div className='bg-hero-pattern  bg-fixed bg-cover h-screen'>
      <div className="h-screen bg-[#353333] bg-opacity-70">
        <NavBar />
      </div>
    </div>
  );
};

export default App;