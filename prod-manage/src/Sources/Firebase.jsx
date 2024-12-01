import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrGhYfiGOfGezOjLpbN-n5nUB4fFrD4_Y",
  authDomain: "project-management-5d812.firebaseapp.com",
  projectId: "project-management-5d812",
  storageBucket: "project-management-5d812.appspot.com",
  messagingSenderId: "910301498824",
  appId: "1:910301498824:web:b5f3c33b422e915f55c4fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
