import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdFgsZoP0rBiaKPAbHwyO_N_vLJNfJa1A",
  authDomain: "sunrise-5c9b5.firebaseapp.com",
  projectId: "sunrise-5c9b5",
  storageBucket: "sunrise-5c9b5.appspot.com",
  messagingSenderId: "753187618836",
  appId: "1:753187618836:web:3f55910ef55c53ced96701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

