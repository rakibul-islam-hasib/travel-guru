import React, { useContext, useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../providers/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';
const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'Destinations', url: '/destinations' },
    { label: 'Tours', url: '/tours' },
    { label: 'Blog', url: '/blog' }
];

const NavBar = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthProvider);

    return (
        <div className='w-[90%] flex justify-between items-center py-3 mx-auto'>
            <div className="">
                <img src={logo} className='h-[50px]' alt="" />
            </div>
            <div className="relative">
                <input type="text" className='px-9 py-1 border focus:outline-primary focus:border-none text-white border-white rounded-lg placeholder-white outline-none bg-[#ffffff2c]' placeholder='Search your Destination...' />
                <span className='text-white absolute left-2 text-2xl top-[6px]'><AiOutlineSearch /></span>
            </div>
            <div className="">
                <ul>
                    {
                        navbarItems.map((item, index) => (
                            <li key={index} className='inline-block mx-2'>
                                <NavLink to={item.url} className='text-white duration-200 text-base hover:text-primary'>{item.label}</NavLink>
                            </li>
                        ))
                    }
                    {
                        user ? <li className='inline-block font-bold text-primary hover:text-red-500 duration-200 cursor-pointer items-center mx-2'>
                            <span
                                title={`${user.displayName}`}
                                className='inline-flex justify-center items-center gap-3'>
                                {user.displayName}
                                <span title='Logout' className='text-white hover:text-red-600'> <FaSignOutAlt className='text-xl ' />
                                </span></span></li> :
                            <li className='inline-block ml-3'> <button className='px-4 py-2 font-semibold rounded-md  bg-[#F9A51A]' onClick={() => navigate('user/login')}>Login</button></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default NavBar;