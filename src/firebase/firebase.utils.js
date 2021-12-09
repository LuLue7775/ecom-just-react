
// // import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyDH7jfn9TY2_avm7drQKUS6zjCUAqq5A-0",
//   authDomain: "ecom-just-react.firebaseapp.com",
//   projectId: "ecom-just-react",
//   storageBucket: "ecom-just-react.appspot.com",
//   messagingSenderId: "533636479742",
//   appId: "1:533636479742:web:cd902024f4c26021e603af",
//    // eslint-disable-next-line 
//   measurementId: "${config.measurementId}"
// };

// export const createUserProfileDocument = async( userAuth, additionalData) => {
//     if(!userAuth) return;

//     console.log(firebase.doc('users/123'));    
// }

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;



import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc , collection, doc, updateDoc } from "firebase/firestore"; 


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

  const firebase = initializeApp(firebaseConfig);
  export const auth = getAuth();

  export const firestore  = getFirestore(firebase);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    
    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
console.log('snapShot')
    // const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };



const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
};

export default firebase;