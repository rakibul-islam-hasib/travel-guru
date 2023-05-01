import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.init';
import { MoonLoader } from 'react-spinners';
export const AuthProvider = createContext(null);
const AuthContext = ({children}) => {
    const [loader , setLoader] = useState(true); 
    const  [user , setUser] = useState(null) ;
    const auth = getAuth(app); 
    const logIn = (email , password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const signUp = (email , password) => { 
        setLoader(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const updateP = (user ,  name) =>{
       return updateProfile(user , {displayName : name}); 
        // setLoader(true)
    }
    const logOut = ()=> { 
        setLoader(true)
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();
    const handelGoogleLogin = ()=> {
        setLoader(true)
        return signInWithPopup(auth , googleProvider); 
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => { 
            setUser(currentUser)
            setLoader(false);
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authValue = { user , logIn , signUp , updateP , logOut , handelGoogleLogin}
    if(loader) return <div className="h-[88vh] flex justify-center items-center">
        <MoonLoader color="#36d7b7" />
    </div>
    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;