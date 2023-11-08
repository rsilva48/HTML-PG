//Rename file to firebase.js and replace fbconf with Firebase web app configuration 
const fbconf = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}

//Firebase >=v9 Modular API
import { initializeApp } from 'firebase/app'
import { ref, getDatabase } from "firebase/database"
const app = initializeApp(fbconf)
//Set Database references to path in Firebase DB
export const db = getDatabase(app)
export const cubRef = ref(db, '/cubiculos')
export const PCsRef = ref(db, '/pcs')
export const cublogRef = ref(db, '/cublog')
export const PClogRef = ref(db, '/pclog')
export const userRef = ref(db, '/users')

//Firebase <v8 Compat Web Namespaced API
/*
import firebase from 'firebase/compat/app';
import "firebase/compat/database";
const app = firebase.initializeApp(fbconf)
//Set Database references to path in Firebase DB
export const db = firebase.database()
export const cubRef = db.ref('/cubiculos')
export const PCsRef = db.ref('/pcs')
export const cublogRef = db.ref('/cublog')
export const PClogRef = db.ref('/pclog')
export const userRef = db.ref('/users')
*/