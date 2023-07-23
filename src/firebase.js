// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY6Duat-lA9vLmUdPq2F3RY-qdRvTx7ak",
  authDomain: "todo-app-21ee6.firebaseapp.com",
  projectId: "todo-app-21ee6",
  storageBucket: "todo-app-21ee6.appspot.com",
  messagingSenderId: "3467900389",
  appId: "1:3467900389:web:0068a8b05a1756c8d2ab0c",
  measurementId: "G-NZ7BXW3DSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
