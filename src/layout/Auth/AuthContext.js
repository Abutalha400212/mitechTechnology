import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebaseConfig";
export const AuthProvider = createContext([]);
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const [togggle,setToggle] = useState(false);
  const createUser = (name, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, name, password);
  };
  const loginExistUser = (name,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,name,password)
  }
  const logInWithPopUp =(provider)=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }
  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth,email)
  }
  const emailVerification = ()=>{
    return sendEmailVerification(auth.currentUser)
  }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      if(currentUser === null || currentUser.emailVerified){
        setUser(currentUser);
    }
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])
  const authInfo = {
    user,
    createUser,
    logOut,
    updateUserProfile,
    loginExistUser,
    logInWithPopUp,
    loading,
    setLoading,
    togggle,
    setToggle,
    resetPassword,
    emailVerification
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
