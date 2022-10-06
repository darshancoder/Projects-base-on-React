// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth,GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG8EMA9ufNV9Qq6tm4T0Z_QEWW7jz1LyA",
  authDomain: "blogproject-32be1.firebaseapp.com",
  projectId: "blogproject-32be1",
  storageBucket: "blogproject-32be1.appspot.com",
  messagingSenderId: "399207043845",
  appId: "1:399207043845:web:f4de0f19b727acf6619d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);