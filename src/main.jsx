import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBS3UtDmiAZGQJy79DDPPjW5wH53bt5xi4",
  authDomain: "fir-tutorial-5e091.firebaseapp.com",
  projectId: "fir-tutorial-5e091",
  storageBucket: "fir-tutorial-5e091.appspot.com",
  messagingSenderId: "321885608856",
  appId: "1:321885608856:web:9697b7277d56b57df3e9ed",
};
initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
