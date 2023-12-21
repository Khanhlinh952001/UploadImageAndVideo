import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB76Ub46X7vvhLtm-wlJJKCcUJLayQpGsE",
  authDomain: "upload-9ece2.firebaseapp.com",
  projectId: "upload-9ece2",
  storageBucket: "upload-9ece2.appspot.com",
  messagingSenderId: "325278410225",
  appId: "1:325278410225:web:0c46096221261a144f1050",
  measurementId: "G-3K35F9BDQ8"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);


