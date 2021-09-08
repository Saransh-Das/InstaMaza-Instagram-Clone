import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqKdviooaqytN24yrI-cdQ0VnsLRAMw98",
  authDomain: "instagram-clone-4288d.firebaseapp.com",
  projectId: "instagram-clone-4288d",
  storageBucket: "instagram-clone-4288d.appspot.com",
  messagingSenderId: "880431512205",
  appId: "1:880431512205:web:59d6136c765801f84f00c4",
  measurementId: "G-MZVDR1656F",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
