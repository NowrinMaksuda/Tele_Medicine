import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);
  const handleGoogle = () => signInWithPopup(auth, googleProvider);
  const updateUserProfile = profile => updateProfile(auth.currentUser, profile);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      setUser(currentUser);

  
      if (currentUser?.email) {
        try {
          const res = await axios.get(
            `http://localhost:3000/users/${currentUser.email}`
          );
          setDbUser(res.data);
        } catch (err) {
          console.error('Failed to fetch dbUser:', err);
          setDbUser(null);
        }
      } else {
        setDbUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    registerUser,
    logIn,
    logOut,
    user,
    dbUser,
    loading,
    handleGoogle,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
