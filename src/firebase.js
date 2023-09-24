import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIoW0hMPW64i9HC_r_zlEboO7AIi0mrig",
  authDomain: "disney-movies16.firebaseapp.com",
  projectId: "disney-movies16",
  storageBucket: "disney-movies16.appspot.com",
  messagingSenderId: "655052690590",
  appId: "1:655052690590:web:f3a8f2f05ecb25ee0ed78f",
  measurementId: "G-EDEH6NLGBN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
