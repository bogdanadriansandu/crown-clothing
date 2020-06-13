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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;