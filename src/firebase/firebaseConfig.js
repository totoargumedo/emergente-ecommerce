// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgw72VNwPfAxV0p5vfq9avt5COQNj8PFg",
  authDomain: "emergente-ecommerce.firebaseapp.com",
  projectId: "emergente-ecommerce",
  storageBucket: "emergente-ecommerce.appspot.com",
  messagingSenderId: "40919915350",
  appId: "1:40919915350:web:c8ffc531be8288bb9614f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// exportar db firestore
export default db;
