// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANnpRkLcOn1gix5SxZfEmHObHPYyA1jZg",
  authDomain: "idin-store-cuy.firebaseapp.com",
  projectId: "idin-store-cuy",
  storageBucket: "idin-store-cuy.firebasestorage.app",
  messagingSenderId: "57798270706",
  appId: "1:57798270706:web:9db031f8dc523e2284fa6b",
  measurementId: "G-6KFP1JYEW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const monitorAuthState = (callback) => {
  onAuthStateChanged(auth, callback);
};
