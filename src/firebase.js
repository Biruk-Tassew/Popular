import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATpHqcSk9i7surQ_zhVYlMoa3J19esBDM",
  authDomain: "popular-social-mern-v1.firebaseapp.com",
  projectId: "popular-social-mern-v1",
  storageBucket: "popular-social-mern-v1.appspot.com",
  messagingSenderId: "338627936368",
  appId: "1:338627936368:web:f2abb05080eebf01f734b5",
  measurementId: "G-KN2MQDMP3Y"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
