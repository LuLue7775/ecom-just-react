
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7jfn9TY2_avm7drQKUS6zjCUAqq5A-0",
  authDomain: "ecom-just-react.firebaseapp.com",
  projectId: "ecom-just-react",
  storageBucket: "ecom-just-react.appspot.com",
  messagingSenderId: "533636479742",
  appId: "1:533636479742:web:cd902024f4c26021e603af",
   // eslint-disable-next-line 
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;