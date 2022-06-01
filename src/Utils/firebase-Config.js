import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database"

let config = {
    apiKey: "AIzaSyAHkTh2WbqbCB_1SWcKBSjZNKATNKlatfs",
    authDomain: "storeabc-73ccd.firebaseapp.com",
    databaseURL: "https://storeabc-73ccd-default-rtdb.firebaseio.com",
    projectId: "storeabc-73ccd",
    storageBucket: "storeabc-73ccd.appspot.com",
    messagingSenderId: "1008154258559",
    appId: "1:1008154258559:web:f230fb5486e46cb111e34a",
    measurementId: "G-34KDFXYS1B"
};
const temp = initializeApp(config);

const database = getDatabase()
const auth = getAuth()
export { auth, database, temp }