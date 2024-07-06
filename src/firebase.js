// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMebh-GbZrQfol0-6ZMFCJUPqL1-RTVzg",
    authDomain: "woof-cf1b3.firebaseapp.com",
    projectId: "woof-cf1b3",
    storageBucket: "woof-cf1b3.appspot.com",
    messagingSenderId: "772273967362",
    appId: "1:772273967362:web:e670653b304be4f511f21b"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;
