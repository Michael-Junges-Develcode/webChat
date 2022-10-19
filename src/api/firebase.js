import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCoAH-S2KlvtCsvytFhxaZLo15bfP83aXo",
  authDomain: "webchat-13aaf.firebaseapp.com",
  databaseURL: "https://webchat-13aaf.firebaseio.com",
  projectId: "webchat-13aaf",
  storageBucket: "webchat-13aaf.appspot.com",
  messagingSenderId: "202314352073",
  appId: "1:202314352073:web:5a12fecf116002f6c61418",
  measurementId: "G-SK96K42081",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
