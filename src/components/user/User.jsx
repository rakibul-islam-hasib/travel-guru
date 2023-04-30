import React from 'react';
import NavBar from '../header/NavBar';
import { Outlet } from 'react-router-dom';
import LNavBar from '../header/LNavBar';

const User = () => {
    return (
        <>
         <LNavBar /> 
         <Outlet />    
        </>
    );
};

export default User;