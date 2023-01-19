// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwQ25On_-qE__fwpYLx5vqmkPIieLp228",
  authDomain: "investorshub-project.firebaseapp.com",
  projectId: "investorshub-project",
  storageBucket: "investorshub-project.appspot.com",
  messagingSenderId: "496680114312",
  appId: "1:496680114312:web:fbe811d33f39969071a73d",
  measurementId: "G-RE6QRFJCF1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth;
export default app;
