import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2gIXXBlxi1EMLp0Z8w-yXKX9VpXzxCbA",
    authDomain: "registrousuario-93be4.firebaseapp.com",
    projectId: "registrousuario-93be4",
    storageBucket: "registrousuario-93be4.appspot.com",
    messagingSenderId: "397585082926",
    appId: "1:397585082926:web:99b03cdda1310146360dbf",
    measurementId: "G-7CSFD4JFRM"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};