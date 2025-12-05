import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const[loading,setLoading]=useState(true)
  const registerUser = (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    return signOut(auth)
  }
  const handleGoogle = () => {
  return signInWithPopup(auth,googleProvider)
  }
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser,profile)
  }
  useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    setLoading(false)
    })
    return ()=>unsubscribe()
  },[])
  const AuthInfo = {
    registerUser,
    logIn,
    logOut,
    user,
    loading,
    handleGoogle,
    updateUserProfile

  }
  return (
    <AuthContext value={AuthInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;