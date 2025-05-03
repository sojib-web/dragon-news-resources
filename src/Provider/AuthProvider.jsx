import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase";

// @ts-ignore

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// @ts-ignore
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // @ts-ignore
      setUser(currentUser);
      setLoading(false);
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const LogOut = () => {
    // @ts-ignore
    return signOut(auth);
  };

  const updateUser = (updateUser) => {
    // @ts-ignore
    return updateProfile(auth.currentUser, updateUser);
  };

  const AuthData = {
    user,
    setUser,
    createUser,
    LogOut,
    SignIn,
    loading,
    setLoading,
    updateUser,
  };
  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
