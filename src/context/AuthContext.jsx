/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import {doc,setDoc } from "firebase/firestore"

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db,'users',email),{
        favShows:[],
      });
    } catch (error) {
      console.log("Error signing up:", error);
      throw error; 
    }
  }

  async function logIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error logging in:", error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error logging out:", error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }

  return <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
