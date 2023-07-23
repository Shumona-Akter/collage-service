// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJu34NLaA4gL1OYcoGh1jLSIzGm6mYHZ8",
  authDomain: "admission-book-service.firebaseapp.com",
  projectId: "admission-book-service",
  storageBucket: "admission-book-service.appspot.com",
  messagingSenderId: "501041419683",
  appId: "1:501041419683:web:b5223f36e2f350fbc4b616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app