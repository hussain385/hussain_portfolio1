import React, { useContext, useState, useEffect } from "react";
import { auth } from "../services/firebase";

// Context Api used to manage the user authentication

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  // firebase signup function
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // firebase sigin function
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // firebase logout function
  const logout = () => {
    return auth.signOut();
  };

  // manages user state for login and logout
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // value that is available in all the components
  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
