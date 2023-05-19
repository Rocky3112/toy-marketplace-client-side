/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthCotext =createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setloading] = useState(true)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
      };

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            // console.log('auth change', currentUser)
            setUser(currentUser)
            setloading(false)
            
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo ={
        user,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading
    }
    return (
        <AuthCotext.Provider value={userInfo}>
            {children}
        </AuthCotext.Provider>
    );
};

export default AuthProvider;