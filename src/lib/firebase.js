import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB2OMt58_z-bxOu4OxUdU1atndvHx24FA",
  authDomain: "book-clone-by-redux.firebaseapp.com",
  projectId: "book-clone-by-redux",
  storageBucket: "book-clone-by-redux.appspot.com",
  messagingSenderId: "223226178575",
  appId: "1:223226178575:web:29c3996f4a597c8c54c77a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
