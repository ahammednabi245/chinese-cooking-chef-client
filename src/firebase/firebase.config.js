// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJtr3H2u6P1U7FpxXQUPaLHHa8fZaq91Y",
  authDomain: "chinese-cafe.firebaseapp.com",
  projectId: "chinese-cafe",
  storageBucket: "chinese-cafe.appspot.com",
  messagingSenderId: "722056055208",
  appId: "1:722056055208:web:86c114f0cd1418c2f7f59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;