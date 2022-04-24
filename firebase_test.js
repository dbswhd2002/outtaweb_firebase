// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD51PWy8XoZiLWFK1iRnCDzDqxY_qP-W48",
  authDomain: "fir-test-8d72f.firebaseapp.com",
  projectId: "fir-test-8d72f",
  storageBucket: "fir-test-8d72f.appspot.com",
  messagingSenderId: "449988479886",
  appId: "1:449988479886:web:9cabe037132a3b6bd9f2df",
  measurementId: "G-Z0NKCT1Z7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
