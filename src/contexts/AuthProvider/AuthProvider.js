import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // creating new User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // updating user information 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // get information of the user
    useEffect(() => {
        const unubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unubscribe()
        };
    }, [])


    const authInfo = { createUser, loading, setLoading, verifyEmail, updateUserProfile, logIn, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;