import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq4WrrgDa9ze1uk4KFZcolPnra_xeiiI4",
  authDomain: "iteach-1284c.firebaseapp.com",
  projectId: "iteach-1284c",
  storageBucket: "iteach-1284c.appspot.com",
  messagingSenderId: "61621116875",
  appId: "1:61621116875:web:71ea0cb8f3880556c2a04e",
  measurementId: "G-SCY3Q1E2B4"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;