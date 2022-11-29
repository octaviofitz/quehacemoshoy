// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGAyXqQfPy02gPYqwYRpG__G21NO9x0Ag",
  authDomain: "quehacemoshoy-340b8.firebaseapp.com",
  projectId: "quehacemoshoy-340b8",
  storageBucket: "quehacemoshoy-340b8.appspot.com",
  messagingSenderId: "638816138420",
  appId: "1:638816138420:web:24b9e2bdcea8c12a3fd3e1",
  measurementId: "G-1YCRYJ5WHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;