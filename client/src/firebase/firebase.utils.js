
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

firebase.initializeApp(firebaseConfig);



export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // .doc returns a ref object

  const snapShot = await userRef.get(); // you can implement CRUD to that object. firestore returns a snapshot based on that ref.

  if (!snapShot.exists) { // if that docRef not exist in database, create it. but if calling actual properties is needed, use snapShot.data()
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


export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce( ( accumulator, collection ) => { 
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator ; 
  } , {} );
};



export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;