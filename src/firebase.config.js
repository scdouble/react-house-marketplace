// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIxtnd3Ge_Wxq-K-ZDHGVtN-dLUYMJTnU",
  authDomain: "react-house-marketplace-6fa08.firebaseapp.com",
  projectId: "react-house-marketplace-6fa08",
  storageBucket: "react-house-marketplace-6fa08.appspot.com",
  messagingSenderId: "1003595629519",
  appId: "1:1003595629519:web:0cf64b5bbe047215f5c8ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
