// Import the necessary Firebase services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Firebase configuration object (replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyDiFnmeAKPfYxGIX_mnrJIENnyWNAG09F4",
    authDomain: "aikamers-pos.firebaseapp.com",
    projectId: "aikamers-pos",
    storageBucket: "aikamers-pos.firebasestorage.app",
    messagingSenderId: "172683189777",
    appId: "1:172683189777:web:8b571a5c6e7c7b140e5bb0",
    measurementId: "G-Z5RFL645HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Export the services for use in other parts of your app
export { auth, firestore, database };
