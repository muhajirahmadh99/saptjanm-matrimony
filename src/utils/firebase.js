// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQbtLzCVy1Qagrm2YVitGen8fBlqUo9AQ",
  authDomain: "saptjanm-matrimony.firebaseapp.com",
  projectId: "saptjanm-matrimony",
  storageBucket: "saptjanm-matrimony.firebasestorage.app",
  messagingSenderId: "812732412489",
  appId: "1:812732412489:web:e211cfeb57df29bcd90598",
  measurementId: "G-H0VKF28X5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();