// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVnpvD2u5d45_9aG6IwlxhXfKTJryE0jw",
  authDomain: "book-list-with-firebase1.firebaseapp.com",
  projectId: "book-list-with-firebase1",
  storageBucket: "book-list-with-firebase1.appspot.com",
  messagingSenderId: "496269611445",
  appId: "1:496269611445:web:99f03e13315b0d37c809fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
