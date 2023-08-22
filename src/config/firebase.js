import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc3LwF9OSr56I7sWnmntmmTg7KoAE92M8",
  authDomain: "login-signup-practice.firebaseapp.com",
  databaseURL: "https://login-signup-practice-default-rtdb.firebaseio.com",
  projectId: "login-signup-practice",
  storageBucket: "login-signup-practice.appspot.com",
  messagingSenderId: "825282348087",
  appId: "1:825282348087:web:1bb2bb41d8e7174a416bb2",
};
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;


