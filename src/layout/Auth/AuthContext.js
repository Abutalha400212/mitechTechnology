import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebaseConfig";
export const AuthProvider = createContext([]);
const AuthContext = ({ children }) => {
    const [user,setUser] = useState(null)
  const auth = getAuth(app);
  const createUser = (name, password) => {
    return createUserWithEmailAndPassword(auth, name, password);
  };
  const loginExistUser = (name,password)=>{
    return signInWithEmailAndPassword(auth,name,password)
  }
  const logOut = ()=>{
    return signOut(auth)
  }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
    })
    return ()=> unsubscribe()
},[])
  const authInfo = {
    user,
    createUser,
    logOut,
    loginExistUser
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
