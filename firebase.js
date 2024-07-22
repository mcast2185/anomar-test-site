const firebase = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQMJNCMOGaUySkmzlEmoG3apFghY6Ja4A",
  authDomain: "project-x-402e5.firebaseapp.com",
  projectId: "project-x-402e5",
  storageBucket: "project-x-402e5.appspot.com",
  messagingSenderId: "811669434882",
  appId: "1:811669434882:web:350f8ebbedfa5c06b96d1b"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// .getApps().length ? firebase.initializeApp(firebaseConfig) : firebase.getApp();

const db = app.firestore();



export default db;