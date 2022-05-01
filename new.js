import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD51PWy8XoZiLWFK1iRnCDzDqxY_qP-W48",
    authDomain: "fir-test-8d72f.firebaseapp.com",
    databaseURL: "https://fir-test-8d72f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-test-8d72f",
    storageBucket: "fir-test-8d72f.appspot.com",
    messagingSenderId: "449988479886",
    appId: "1:449988479886:web:9cabe037132a3b6bd9f2df",
    measurementId: "G-Z0NKCT1Z7Q"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const email = user.email;
    console.log(uid);

    document.getElementById("name").innerHTML = "Your email is" + email;

    // …
  } else {
    // User is signed out
    console.log("no user");
    // …
  }
});
