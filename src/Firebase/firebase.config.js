// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASJBEMRhCVY1L9wKj-eHvBMN0tMt-olCE",
  authDomain: "comic-verse.firebaseapp.com",
  projectId: "comic-verse",
  storageBucket: "comic-verse.appspot.com",
  messagingSenderId: "1051048446781",
  appId: "1:1051048446781:web:5e903a8ada5fb8105cd354",
  measurementId: "G-V9SF489SSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;