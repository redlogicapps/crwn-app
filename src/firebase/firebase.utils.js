import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAE_3FrtcamWW4PmDetTzAO-XAfCQJp7UU",
  authDomain: "crwn-db-aeb99.firebaseapp.com",
  databaseURL: "https://crwn-db-aeb99.firebaseio.com",
  projectId: "crwn-db-aeb99",
  storageBucket: "crwn-db-aeb99.appspot.com",
  messagingSenderId: "422328345973",
  appId: "1:422328345973:web:c34899d6304a76f55b9f3c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;