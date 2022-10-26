import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
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
    setToggle
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
