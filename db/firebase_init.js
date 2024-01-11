// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_5K5IYFQu9zQjTcQV-PjddxyMZ-CJjRA",
  authDomain: "nextjs-firebase-f8985.firebaseapp.com",
  projectId: "nextjs-firebase-f8985",
  storageBucket: "nextjs-firebase-f8985.appspot.com",
  messagingSenderId: "303942986331",
  appId: "1:303942986331:web:63288518f928bacc646d7e",
  measurementId: "G-3HZRFYBXVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Analytics 
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize auth Firebase 
export const auth = getAuth(app);
