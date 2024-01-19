// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb-BRCsljuT3gLyHgMdcvxKDR-ra05sAU",
    authDomain: "htgttm-c7e7c.firebaseapp.com",
    projectId: "htgttm-c7e7c",
    storageBucket: "htgttm-c7e7c.appspot.com",
    messagingSenderId: "1019911067308",
    appId: "1:1019911067308:web:ca8fbafdcbb59a9e493109",
    measurementId: "G-NNQHLZSNDR"
  };

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
export default APP;

