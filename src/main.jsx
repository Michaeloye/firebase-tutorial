import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const auth = getAuth();

// collection ref
const colRef = collection(db, "books"); //database and collection name

// queries
const q = query(colRef, orderBy("createdAt"));

// get collection data anytime collection is updated
onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// Handle Add
function handleAdd(e, title, author) {
  e.preventDefault();
  addDoc(colRef, {
    title,
    author,
    createdAt: serverTimestamp(),
  });
}

// Handle Delete
function handleDelete(e, id) {
  e.preventDefault();
  const docRef = doc(db, "books", id);
  deleteDoc(docRef);
}

// get a single document
const docRef = doc(db, "books", "eOyKOFD4i7BNsfnG05Hz");

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// Handle Update
function handleUpdate(e, id, title) {
  e.preventDefault();
  const docRef = doc(db, "books", id);
  updateDoc(docRef, {
    title: title,
  });
}

// Handle Signup
function handleSignup(e, email, password) {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created:", cred.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// Handle Login
function handleLogin(e, email, password) {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => console.log("user logged in: ", cred.user))
    .catch((err) => console.log(err.message));
}

// Handle Logout
function handleLogout() {
  signOut(auth)
    .then(() => {
      console.log("the user has logged out");
    })
    .catch((err) => console.log(err.message));
}
ReactDOM.render(
  <React.StrictMode>
    <App
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleSignup={handleSignup}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
