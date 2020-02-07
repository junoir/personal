import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0i3bSvFXnZvIAy-MVz_AgoaC9x42OygY",
  authDomain: "motseki-port.firebaseapp.com",
  databaseURL: "https://motseki-port.firebaseio.com",
  projectId: "motseki-port",
  storageBucket: "motseki-port.appspot.com",
  messagingSenderId: "271222926288",
  appId: "1:271222926288:web:23e04139bc249f33aa67d5",
  measurementId: "G-SZJPGKDSE1"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export { firebase, firebaseDB };
