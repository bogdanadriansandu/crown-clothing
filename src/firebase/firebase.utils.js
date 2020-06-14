import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDCwtWmgG2Z1A9RPvzDZdbnv6TJEPolBsU",
  authDomain: "crown-db-66482.firebaseapp.com",
  databaseURL: "https://crown-db-66482.firebaseio.com",
  projectId: "crown-db-66482",
  storageBucket: "crown-db-66482.appspot.com",
  messagingSenderId: "777574218932",
  appId: "1:777574218932:web:89ab93b2edfbe98d1f6be1",
  measurementId: "G-3TNG0ZJSDC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;