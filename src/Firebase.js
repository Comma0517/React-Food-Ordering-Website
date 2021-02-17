import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyARddkCJ3a2izQcbiGB34zsAHy0YiCu_oA",
  authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREASE_APP_ID,
});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
export default app;
export { projectStorage, projectFirestore, timestamp };
