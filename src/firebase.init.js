// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1bsIAW3NVRkfvYyoaT2NjFmDSlLeTRjA",
  authDomain: "cmsystem-13067.firebaseapp.com",
  projectId: "cmsystem-13067",
  storageBucket: "cmsystem-13067.appspot.com",
  messagingSenderId: "368132806347",
  appId: "1:368132806347:web:080b74547b41e653306d4e",
  measurementId: "G-QN5EY8M8G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase(app);
