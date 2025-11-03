import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFYaN-um7KP4IrJ6YDSksueqcbRu6R63U",
  authDomain: "clase11-9d44b.firebaseapp.com",
  projectId: "clase11-9d44b",
  storageBucket: "clase11-9d44b.firebasestorage.app",
  messagingSenderId: "1075004179503",
  appId: "1:1075004179503:web:9ff71e0263cf7479cc72da",
  measurementId: "G-Y9R0TFJPKF"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();