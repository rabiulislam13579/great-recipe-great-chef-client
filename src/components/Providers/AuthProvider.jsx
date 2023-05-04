import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase-config';



export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe
        }

    }, [])

    const profileUpdate=(name,photo)=>{
      return  updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        profileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;