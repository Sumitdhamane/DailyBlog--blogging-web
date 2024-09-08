// firebase.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Use Vite's environment variable
  authDomain: "blogging-web-2ed22.firebaseapp.com",
  projectId: "blogging-web-2ed22",
  storageBucket: "blogging-web-2ed22.appspot.com",
  messagingSenderId: "179952804215",
  appId: "1:179952804215:web:fbd69dcc27cbd1871ac172",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
