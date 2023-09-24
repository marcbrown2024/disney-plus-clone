// How to add firebase doc to database

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import movieCollection from "./disneyPlusMoviesData";

const firebaseConfig = {
  apiKey: "AIzaSyBIoW0hMPW64i9HC_r_zlEboO7AIi0mrig",
  authDomain: "disney-movies16.firebaseapp.com",
  projectId: "disney-movies16",
  storageBucket: "disney-movies16.appspot.com",
  messagingSenderId: "655052690590",
  appId: "1:655052690590:web:f3a8f2f05ecb25ee0ed78f",
  measurementId: "G-EDEH6NLGBN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

