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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //query firestore to see if it already exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
