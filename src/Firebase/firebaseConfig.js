// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8m67dhYdgZNKUIygZtxC9qQqp_xILXBI",
  authDomain: "learntechorg.firebaseapp.com",
  projectId: "learntechorg",
  storageBucket: "learntechorg.appspot.com",
  messagingSenderId: "649246675305",
  appId: "1:649246675305:web:55d1658faa1dc939e6adf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app