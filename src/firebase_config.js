
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCEAUzRPHmuAStEYZiCHe_WoZoJKmVWTrU",
    authDomain: "react-todo-e3954.firebaseapp.com",
    projectId: "react-todo-e3954",
    storageBucket: "react-todo-e3954.appspot.com",
    messagingSenderId: "5739855027",
    appId: "1:5739855027:web:8f759e3ff8881584db84c6",
    measurementId: "G-Q1GSJ9V7EY"
  });
  
  const db = getFirestore(firebaseConfig)

  export { db };