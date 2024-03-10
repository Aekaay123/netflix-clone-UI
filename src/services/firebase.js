// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore,} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBrZ0SbmVCA1PYsvmSbwwAP05AUDH_FH10",
  authDomain: "netflix-clone-a4f25.firebaseapp.com",
  projectId: "netflix-clone-a4f25",
  storageBucket: "netflix-clone-a4f25.appspot.com",
  messagingSenderId: "772709424891",
  appId: "1:772709424891:web:49978218820b29b5f65a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);