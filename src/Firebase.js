import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyARddkCJ3a2izQcbiGB34zsAHy0YiCu_oA",
  authDomain: "save-a-meal.firebaseapp.com",
  projectId: "save-a-meal",
  storageBucket: "save-a-meal.appspot.com",
  messagingSenderId: "865077099966",
  appId: "865077099966:web:11a890d27eae9418810def",
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
export default app;
export { projectStorage, projectFirestore, timestamp };
