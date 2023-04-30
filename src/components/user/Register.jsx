import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='h-[88vh] flex justify-center items-center'>
            <div className="border p-12 w-[30%] mx-auto">
                <h1 className='text-2xl font-bold mb-2'>Login</h1>
                <input type="text" className='outline-none  border-b w-full mb-5 py-1' placeholder='Username or Email' />
                <input type="text" className='outline-none border-b w-full mb-5  py-1' placeholder='Password' />
                <div className="flex justify-between">
                    <div className="">
                        <input type="checkbox" name='remember' value="Boat" />
                        <label for="remember" className='ml-2'>Remember Me </label>
                    </div>
                    <div className="">
                        <h1 className='text-base'><small><Link to={'/'}>Forgot Password ? </Link></small></h1>
                    </div>
                </div>
                <button className='w-full mb-3 bg-primary py-2 font-semibold mt-7'>Login</button>
                <small>Don't have an account ? <Link to='/user/register'>Create an account</Link></small>
            </div>
        </div>
    );
};

export default Register;