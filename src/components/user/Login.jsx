import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/icons/search.png';
import facebook from '../../assets/icons/facebook.png';
import AuthContext, { AuthProvider } from '../../providers/AuthContext';
const Login = () => {
    const {user} = useContext(AuthProvider); 
    const handelFormSubmit = e => { 
        e.preventDefault(); 
        const form = e.target;
        const email = form.name.value;
        const password = form.password.value;
        // console.log(email, password)
        
    }
    return (
        <div className='h-[88vh] flex flex-col justify-center items-center'>
            <form onSubmit={handelFormSubmit} className="border p-12 w-[50%] md:w-[30%] mx-auto">
                <h1 className='text-2xl font-bold mb-2'>Login</h1>
                <input type="text" name='name' className='outline-none  border-b w-full mb-5 py-1' placeholder='Username or Email' />
                <input type="password" name='password' className='outline-none border-b w-full mb-5  py-1' placeholder='Password' />
                <div className="flex justify-between">
                    <div className="">
                        <input type="checkbox" name='remember' value="Boat" />
                        <label htmlFor="remember" className='ml-2'>Remember Me </label>
                    </div>
                    <div className="">
                        <h1 className='text-base'><small><Link to={'/'}>Forgot Password ? </Link></small></h1>
                    </div>
                </div>
                <button className='w-full mb-3 bg-primary py-2 font-semibold mt-7'>Login</button>
                <small>Don't have an account ? <Link to='/user/register'>Create an account</Link></small>
            </form>
            <div className="w-[30%] hidden mx-auto">
                <div className="flex items-center py-4">
                    <div className="flex-grow h-px bg-gray-400"></div>
                    <span className="flex-shrink text-base text-gray-500 px-4 italic font-light">OR</span>
                    <div className="flex-grow h-px bg-gray-400"></div>
                </div>
                <div className="flex hover:cursor-pointer border mb-3 rounded-full px-5 py-2 justify-center items-center gap-4">
                    <img src={google} className='w-[20px] ' alt="" />
                    <h1 className='text-sm font-bold'>Continue with Google</h1>
                </div>
                <div className="flex hover:cursor-pointer border rounded-full px-5 py-2 justify-center items-center gap-4">
                    <img src={facebook} className='w-[20px] ' alt="" />
                    <h1 className='text-sm font-bold'>Continue with Facebook</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;