import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebaseConfig";
export const AuthProvider = createContext([]);
const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  //............Create User........//
  const createUser = (name, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, name, password);
  };
  //......Exist User...........//
  const loginExistUser = (name, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, name, password);
  };
  //.......Login With PopUp........//
  const logInWithPopUp = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //..........Log Out............//
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //...............Update user profile............//
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //................Reset Password.................//
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //...............Email verification............//
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };
  //...................Control User Data..............//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //................Props Drilling with Context Api..............//
  const authInfo = {
    user,
    loading,
    show,
    togggle: toggle,
    createUser,
    logOut,
    updateUserProfile,
    loginExistUser,
    logInWithPopUp,
    setToggle,
    resetPassword,
    emailVerification,
    setShow,
    handleShow,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
