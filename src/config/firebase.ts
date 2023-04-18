// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDcsBGBsViSd2rGvmiePSeSzrrXYRY5m0",
  authDomain: "react-course-85386.firebaseapp.com",
  projectId: "react-course-85386",
  storageBucket: "react-course-85386.appspot.com",
  messagingSenderId: "1025467944603",
  appId: "1:1025467944603:web:78a9c5df6d32da79fd003e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();