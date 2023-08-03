// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD89PoCLy039jg2lmwUFCJVjOt0CgGqpVI",
  authDomain: "nextauth-c1140.firebaseapp.com",
  projectId: "nextauth-c1140",
  storageBucket: "nextauth-c1140.appspot.com",
  messagingSenderId: "1083564345525",
  appId: "1:1083564345525:web:fd7b3892fca0b27c3f96fc",
  measurementId: "G-0D93LPVGLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app