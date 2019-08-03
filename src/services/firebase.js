import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyArlU8yyk47RyL1TITO2NvPrqeAKRbmfyU",
    authDomain: "experiecniauip.firebaseapp.com",
    databaseURL: "https://experiecniauip.firebaseio.com",
    projectId: "experiecniauip",
    storageBucket: "experiecniauip.appspot.com",
    messagingSenderId: "846783682881",
    appId: "1:846783682881:web:7ed642525bed677c"
});

export const db = app.database();
export const  cubRef = db.ref('/crai/cubiculos')