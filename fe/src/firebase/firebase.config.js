// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDoEAGkgju9o8j6x7YOGBqW75YO9nEHR8w",
  authDomain: "testapi-e5fc9.firebaseapp.com",
  projectId: "testapi-e5fc9",
  storageBucket: "testapi-e5fc9.firebasestorage.app",
  messagingSenderId: "1052178028721",
  appId: "1:1052178028721:web:e9bd49f27b5eb59330ea90",
  measurementId: "G-LDG0GCJMRX",
  databaseURL: "https://testapi-e5fc9-default-rtdb.asia-southeast1.firebasedatabase.app", // Thêm databaseURL với khu vực đúng
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
