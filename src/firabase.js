import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyANDoR4vEI73bsGbmK5fE2i9JMSt8esDVw',
  authDomain: 'twitter-firebase-848b6.firebaseapp.com',
  projectId: 'twitter-firebase-848b6',
  storageBucket: 'twitter-firebase-848b6.appspot.com',
  messagingSenderId: '329639416941',
  appId: '1:329639416941:web:6c31f57316001818f95b64',
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
