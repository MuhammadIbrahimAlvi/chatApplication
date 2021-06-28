// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyBLl-nRYmlNU6iRAA50g3RPrA_FPmwpd2M",
  authDomain: "chatapp-4536d.firebaseapp.com",
  projectId: "chatapp-4536d",
  storageBucket: "chatapp-4536d.appspot.com",
  messagingSenderId: "836091526434",
  appId: "1:836091526434:web:791c4bf51b02265d92f97b",
  measurementId: "G-K1WXJ8MV67",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
