// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsjQGA6rVvxOpu3LBLJ5gQehU1TiEh-wA",
  authDomain: "netflixgpt-23a84.firebaseapp.com",
  projectId: "netflixgpt-23a84",
  storageBucket: "netflixgpt-23a84.firebasestorage.app",
  messagingSenderId: "213272686198",
  appId: "1:213272686198:web:03ca0b6ffc5097abc17957",
  measurementId: "G-17P1E49LPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();