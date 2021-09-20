import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyD9EYe5i84RVRYF9qR3i4JQIxUAr4kcG1M",
  authDomain: "nami-town.firebaseapp.com",
  projectId: "nami-town",
  storageBucket: "nami-town.appspot.com",
  messagingSenderId: "827403924569",
  appId: "1:827403924569:web:7436b4c677a0a9942e2d48",
  measurementId: "G-H1Q8D4M4L9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db};