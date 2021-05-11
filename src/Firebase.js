import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyARddkCJ3a2izQcbiGB34zsAHy0YiCu_oA",
  authDomain: "save-a-meal.firebaseapp.com",
  databaseURL:
    "https://save-a-meal-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "save-a-meal",
  storageBucket: "save-a-meal.appspot.com",
  messagingSenderId: "865077099966",
  appId: "1:865077099966:web:11a890d27eae9418810def",
  measurementId: "G-JRW7L3N5NG",
});
firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
export default app;
export { projectStorage, projectFirestore, timestamp };
