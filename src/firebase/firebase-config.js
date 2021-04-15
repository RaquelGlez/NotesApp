import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCwRsrlz_rNuD-1MNUN1WNCFP2KH32JsT8",
    authDomain: "notes-app-78b95.firebaseapp.com",
    projectId: "notes-app-78b95",
    storageBucket: "notes-app-78b95.appspot.com",
    messagingSenderId: "802351499026",
    appId: "1:802351499026:web:db5cf74f1ba96f409f95cb",
    measurementId: "G-4S68W4RJM2"
  };

  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    firebase,
    db,
    googleAuthProvider,
}  