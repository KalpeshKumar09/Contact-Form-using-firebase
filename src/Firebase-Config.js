import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBb6pz99LCiHZQu5CCK3vZ51XvjT--z2v4",
  authDomain: "contact-form-1a11d.firebaseapp.com",
  projectId: "contact-form-1a11d",
  storageBucket: "contact-form-1a11d.appspot.com",
  messagingSenderId: "136671704136",
  appId: "1:136671704136:web:56b471c0971577815d547d",
  measurementId: "G-RQYQGKNVDN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
