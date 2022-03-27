import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDBKYvhqkfyUNdMf6e-EoD5NkTy5zHfdkI",
    authDomain: "project-d22aa.firebaseapp.com",
    projectId: "project-d22aa",
    storageBucket: "project-d22aa.appspot.com",
    messagingSenderId: "915712545829",
    appId: "1:915712545829:web:0ff4ad12f95530f88b1bcc"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
