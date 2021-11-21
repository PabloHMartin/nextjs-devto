import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCsUx8al8fBRv8NZ9CTHFqT6W6tBqPj95Q",
    authDomain: "nextfire-db383.firebaseapp.com",
    projectId: "nextfire-db383",
    storageBucket: "nextfire-db383.appspot.com",
    messagingSenderId: "55203781578",
    appId: "1:55203781578:web:02742d2833da736b754d33"
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();