import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app'
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDqXSG7xMhU4hTEuONmAfiDYT3Ayc7l2fM",
  authDomain: "my-cart-5e2ae.firebaseapp.com",
  projectId: "my-cart-5e2ae",
  storageBucket: "my-cart-5e2ae.appspot.com",
  messagingSenderId: "881562087990",
  appId: "1:881562087990:web:cc94f09404622838511e97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
