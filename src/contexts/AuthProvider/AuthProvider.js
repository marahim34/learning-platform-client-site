import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


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

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
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


    const authInfo = { createUser, user, loading, setLoading, verifyEmail, updateUserProfile, logIn, signInWithGoogle, signInWithGitHub, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;