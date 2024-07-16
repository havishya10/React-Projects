import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQrXBVhHA_-Lz8QgKIxEHnjXTf3MgAepI",
  authDomain: "react-notes-app-20ac4.firebaseapp.com",
  projectId: "react-notes-app-20ac4",
  storageBucket: "react-notes-app-20ac4.appspot.com",
  messagingSenderId: "520793924542",
  appId: "1:520793924542:web:f8f3b195181704be218fef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");

// course firebase authentication

// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD_uXh8KfNe11S8qhfQuB_RAzIHrKFTOHE",
//   authDomain: "react-notes-7a013.firebaseapp.com",
//   projectId: "react-notes-7a013",
//   storageBucket: "react-notes-7a013.appspot.com",
//   messagingSenderId: "370854322953",
//   appId: "1:370854322953:web:3e20fb09a3b7f61fc329d8",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export const notesCollection = collection(db, "notes");
