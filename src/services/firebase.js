import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyAm54CIBwZYxCsuWEqhKvaihzQ2NFBjxsI",
    authDomain: "uip-crai.firebaseapp.com",
    databaseURL: "https://uip-crai.firebaseio.com",
    projectId: "uip-crai",
    storageBucket: "",
    messagingSenderId: "1020263688707",
    appId: "1:1020263688707:web:1b93a514cd410dee"
};

let fb = firebase.initializeApp(firebaseConfig);
let db = fb.database();
let CubDBRef = db.ref('/cubiculos');

export {
    CubDBRef
}