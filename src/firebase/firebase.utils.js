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
  };

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log(snapShot)

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
    await userRef.set({
      displayName, 
      email,
      createdAt,
      ...additionalData
    });
    
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  // export const signInWithEmailAndPassword = () => auth.signInWithEmailAndPassword(provider);

  export default firebase;