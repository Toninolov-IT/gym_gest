import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-MNq12ynf5uFuNrfUKeDoDG_Wx0PVucI",
  authDomain: "gymgest-7836f.firebaseapp.com",
  projectId: "gymgest-7836f",
  storageBucket: "gymgest-7836f.firebasestorage.app",
  messagingSenderId: "1068737950729",
  appId: "1:1068737950729:web:a8e7d8274f5c2abdb4f4d8",
  measurementId: "G-P1HMXV0CYD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);