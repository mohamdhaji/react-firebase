import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDFHBUd4y3fva_9Hfwv2lD5yLVwM8MKQK4",
  authDomain: "m-city-dcf4d.firebaseapp.com",
  databaseURL: "https://m-city-dcf4d.firebaseio.com",
  projectId: "m-city-dcf4d",
  storageBucket: "m-city-dcf4d.appspot.com",
  messagingSenderId: "1042381530439",
  appId: "1:1042381530439:web:a6e23b48a49c09c94dd862",
  measurementId: "G-BQCQLJGRE0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebasePlayers = firebaseDB.ref("players");
const firebaseTeams = firebaseDB.ref("teams");

export {
  firebase,
  firebaseDB,
  firebasePlayers,
  firebaseTeams,
  firebaseMatches,
  firebasePromotions,
};

firebaseDB
  .ref("teams")
  .once("value")
  .then((snapshot) => {
    console.log(snapshot.val());
  });
