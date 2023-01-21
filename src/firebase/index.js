// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXq5kohbv7vFdjGJip7tHcP70R5Nwhxw4",
    authDomain: "ecommerce-coder-cf973.firebaseapp.com",
    projectId: "ecommerce-coder-cf973",
    storageBucket: "ecommerce-coder-cf973.appspot.com",
    messagingSenderId: "888939250708",
    appId: "1:888939250708:web:e47682f59d13612d025301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);