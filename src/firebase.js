import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbieUVPYzrSEiULZcBntKR5mz0vScDQ84",
  authDomain: "clone-6fd95.firebaseapp.com",
  projectId: "clone-6fd95",
  storageBucket: "clone-6fd95.appspot.com",
  messagingSenderId: "846303073520",
  appId: "1:846303073520:web:dc699675756b371c161e35",
  measurementId: "G-KLLS23E222"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {db ,auth};




