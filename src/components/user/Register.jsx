import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/icons/search.png';
import facebook from '../../assets/icons/facebook.png';
import { AuthProvider } from '../../providers/AuthContext';
import { MoonLoader } from 'react-spinners';
const Register = () => {
    const { signUp, updateP, user } = useContext(AuthProvider);
    const [loading, setLoading] = useState(false)
    const handelFormSubmit = e => {
        setLoading(true)
        e.preventDefault()
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        // let confirmPassword = form.confirmPassword.value; 

        signUp(email, password)
            .then(result => {
                // console.log(result.user)
                updateP(result.user, form.name.value)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.code)
                setLoading(false)
            })
     
    }
    // console.log(user)
    return (
        <>
            {
                loading ? <div className="h-[88vh] flex justify-center items-center">
                    <MoonLoader color="#36d7b7" />
                </div> :
                    <div className='h-[88vh] flex flex-col justify-center items-center'>
                        <form onSubmit={handelFormSubmit} className="border px-12 py-6 w-[30%] mx-auto">
                            <h1 className='text-2xl font-bold mb-4'>Create an account</h1>
                            <input name='name' type="text" className='outline-none  border-b w-full mb-3 py-1' placeholder='Full Name' />
                            <input name='email' required type="email" className='outline-none  border-b w-full mb-3 py-1' placeholder='Email' />
                            <input name='password' type="password" required className='outline-none border-b w-full mb-3  py-1' placeholder='Password' />
                            <input name='confirmPassword' type="password" className='outline-none border-b w-full mb-5  py-1' placeholder='Confirm Password' />

                            <button className='w-full mb-3 bg-primary py-2 font-semibold '>Create an account</button>
                            <small className='text-center'>Already have an account ? <Link to='/user/login'>Login</Link></small>
                        </form>
                        <div className="w-[30%] mx-auto">
                            <div className="flex items-center py-4">
                                <div className="flex-grow h-px bg-gray-400"></div>
                                <span className="flex-shrink text-base text-gray-500 px-4 italic font-light">OR</span>
                                <div className="flex-grow h-px bg-gray-400"></div>
                            </div>
                            <div className="flex cursor-pointer border mb-3 rounded-full px-5 py-2 justify-center items-center gap-4">
                                <img src={google} className='w-[20px] ' alt="" />
                                <h1 className='text-sm font-bold'>Continue with Google</h1>
                            </div>
                            <div className="flex cursor-pointer border rounded-full px-5 py-2 justify-center items-center gap-4">
                                <img src={facebook} className='w-[20px] ' alt="" />
                                <h1 className='text-sm font-bold'>Continue with Facebook</h1>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Register;