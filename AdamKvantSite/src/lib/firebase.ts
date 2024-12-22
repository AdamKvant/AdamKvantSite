// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjUbg8BsvWohGXdPGfcbk9zh8X-8ERW6o",
  authDomain: "adam-kvant.firebaseapp.com",
  projectId: "adam-kvant",
  storageBucket: "adam-kvant.firebasestorage.app",
  messagingSenderId: "208687555967",
  appId: "1:208687555967:web:7be15c3d290b777c2ce64a",
  measurementId: "G-2J88B9650Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);