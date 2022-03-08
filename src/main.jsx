import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS3UtDmiAZGQJy79DDPPjW5wH53bt5xi4",
  authDomain: "fir-tutorial-5e091.firebaseapp.com",
  projectId: "fir-tutorial-5e091",
  storageBucket: "fir-tutorial-5e091.appspot.com",
  messagingSenderId: "321885608856",
  appId: "1:321885608856:web:9697b7277d56b57df3e9ed",
};
// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books"); //database and collection name

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
