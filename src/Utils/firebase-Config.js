import * as firebase from "firebase"
import 'firebase/auth'
import 'firebase/storage'

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
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}
const auth = firebase.auth()
const database = firebase.database()
const storage = firebase.storage()

export { auth, database, storage }
export default firebase