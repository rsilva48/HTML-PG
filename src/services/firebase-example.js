//Rename file to firebase.js and replace fbconf with Firebase web app configuration 

import { initializeApp } from 'firebase/app'
import { ref, getDatabase } from "firebase/database"
//import firebase from 'firebase/compat/app';

const fbconf = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}

const app = initializeApp(fbconf)

//Set Database references to path in Firebase DB
export const db = getDatabase(app)
export const cubRef = ref(db, '/cubiculos')
export const PCsRef = ref(db, '/pcs')
export const cublogRef = ref(db, '/cublog')
export const PClogRef = ref(db, '/pclog')
export const userRef = ref(db, '/users')
