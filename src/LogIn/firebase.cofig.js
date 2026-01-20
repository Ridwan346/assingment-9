/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2V5CC1sk3Lxj9y1uKiReiWixQcwdEflc",
  authDomain: "game-downlode.firebaseapp.com",
  projectId: "game-downlode",
  storageBucket: "game-downlode.firebasestorage.app",
  messagingSenderId: "719949519478",
  appId: "1:719949519478:web:f3bf0f748abe8c0b9c5d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;