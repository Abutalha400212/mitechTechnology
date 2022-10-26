import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB8m67dhYdgZNKUIygZtxC9qQqp_xILXBI",
  authDomain: "learntechorg.firebaseapp.com",
  projectId: "learntechorg",
  storageBucket: "learntechorg.appspot.com",
  messagingSenderId: "649246675305",
  appId: "1:649246675305:web:55d1658faa1dc939e6adf8"
};

const app = initializeApp(firebaseConfig);

export default app