import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  
  authDomain: 'twitter-firebase-848b6.firebaseapp.com',
  projectId: 'twitter-firebase-848b6',
  storageBucket: 'twitter-firebase-848b6.appspot.com',
  messagingSenderId: '329639416941',
  appId: '1:329639416941:web:6c31f57316001818f95b64',
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
