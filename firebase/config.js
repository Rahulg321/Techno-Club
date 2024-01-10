import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrw2LaXt0wOzkWkLVvYtPraomjpFSfIi0",
  authDomain: "nextjs-techno-club.firebaseapp.com",
  projectId: "nextjs-techno-club",
  storageBucket: "nextjs-techno-club.appspot.com",
  messagingSenderId: "811282710466",
  appId: "1:811282710466:web:23f99e7496b7f3cc54205b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
