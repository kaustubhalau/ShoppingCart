// npm install firebase

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv9GQa9UWQDySFSjhianbdBk4aNLnIf2c",
  authDomain: "cart-e4026.firebaseapp.com",
  projectId: "cart-e4026",
  storageBucket: "cart-e4026.appspot.com",
  messagingSenderId: "71225955884",
  appId: "1:71225955884:web:7a0e5e8f6303d6b2e7a389"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

