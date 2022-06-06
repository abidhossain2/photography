// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC92GJhB4QPH8u1WPXc0ZzGLp853v2WmNA",
  authDomain: "splendid-shot.firebaseapp.com",
  projectId: "splendid-shot",
  storageBucket: "splendid-shot.appspot.com",
  messagingSenderId: "1001314833371",
  appId: "1:1001314833371:web:ada62a00a5ff8149f28dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth; 