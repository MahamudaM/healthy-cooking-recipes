// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5EpF8WUAuuzqghzn8owIbYyB0BTD0UzE",
  authDomain: "healthy-cooking-recipes-af46e.firebaseapp.com",
  projectId: "healthy-cooking-recipes-af46e",
  storageBucket: "healthy-cooking-recipes-af46e.appspot.com",
  messagingSenderId: "702720512123",
  appId: "1:702720512123:web:093192c48f9873fb9152de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;