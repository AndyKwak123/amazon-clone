import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDTflTQ8QDSU5hZfj5_mVGKEfmzy80qjWw",
    authDomain: "clone-83b2e.firebaseapp.com",
    databaseURL: "https://clone-83b2e.firebaseio.com",
    projectId: "clone-83b2e",
    storageBucket: "clone-83b2e.appspot.com",
    messagingSenderId: "907703143566",
    appId: "1:907703143566:web:aae164bbded54979d78ddf",
    measurementId: "G-CBCHXQ7W52",
});

const db = firebaseApp.firestore();   
const auth = firebase.auth();

export {auth};


//Connect firebase to react front end 