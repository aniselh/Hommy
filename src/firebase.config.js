import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBPZ-FNMxeCWIKt8jhyoJSpqabeeuibg",
  authDomain: "homarket-17e43.firebaseapp.com",
  projectId: "homarket-17e43",
  storageBucket: "homarket-17e43.appspot.com",
  messagingSenderId: "759693549373",
  appId: "1:759693549373:web:28af7b635ecedccc91ef54"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()