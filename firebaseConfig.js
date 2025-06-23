import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDo8H7YsmtHavGik8MZgPH5JtdtUnnHQRo",
    authDomain: "bhuvanar-live.firebaseapp.com",
    projectId: "bhuvanar-live",
    storageBucket: "bhuvanar-live.firebasestorage.app",
    messagingSenderId: "1035529167102",
    appId: "1:1035529167102:web:287441f93f4b2395d785af",
    measurementId: "G-31WLMTKJ7K"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
