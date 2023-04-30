import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navbarItems = [
    { label: 'Home', url: '/' },
    { label: 'Destinations', url: '/destinations' },
    { label: 'Tours', url: '/tours' },
    { label: 'Blog', url: '/blog' }
];
const LNavBar = () => {
    const path = useLocation().pathname;
    const [navPath, setNavPath] = useState(false);
    useEffect(() => {
        if (path === '/user/login') {
            setNavPath(true)
        }
        else {
            setNavPath(false);
        }
    }, [path])
    console.log(navPath)
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-[90%] flex justify-between items-center py-3 mx-auto'>
                <div className="">
                    <img src={logo} className='h-[50px]' alt="" />
                </div>

                <div className="">
                    <ul>
                        {
                            navbarItems.map((item, index) => (
                                <li key={index} className='inline-block mx-2'>
                                    <NavLink to={item.url} className='text-black duration-200 text-base hover:text-primary'>{item.label}</NavLink>
                                </li>
                            ))
                        }
                        <li className='inline-block ml-3'>{navPath ? <button className='px-4 py-2 font-semibold rounded-md  bg-[#F9A51A]' onClick={() => navigate('/user/register')}>Register</button> : <button className='px-4 py-2 font-semibold rounded-md  bg-[#F9A51A]' onClick={() => navigate('/user/login')}>Login</button>}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default LNavBar;