// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVzGrKJd7pTpLV4KFK8OTcRaTTxEfhxFw",
  authDomain: "what-sapp-60e66.firebaseapp.com",
  projectId: "what-sapp-60e66",
  storageBucket: "what-sapp-60e66.appspot.com",
  messagingSenderId: "216805367954",
  appId: "1:216805367954:web:b43651ca4ef8d1a8fdc64b",
  measurementId: "G-QJ9N812YEX"
};
const firebase1 = firebase.initializeApp(firebaseConfig);
const db = firebase1.firestore();
const auth = firebase1.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;