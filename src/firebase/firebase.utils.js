import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCcAwuyknpQIPMuJItkkxbh9maVjTJ9oFY",
    authDomain: "savvy-theory-302218.firebaseapp.com",
    projectId: "savvy-theory-302218",
    storageBucket: "savvy-theory-302218.appspot.com",
    messagingSenderId: "76514672030",
    appId: "1:76514672030:web:7c7d04084fa3aff71eea8f",
    measurementId: "G-1B5M6DX7JZ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;