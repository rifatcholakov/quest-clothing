import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyA_-W8HslciYUTdbdRwMuqVoz7_Qpw5l7E',
    authDomain: 'q-db-40e7f.firebaseapp.com',
    databaseURL: 'https://q-db-40e7f.firebaseio.com',
    projectId: 'q-db-40e7f',
    storageBucket: 'q-db-40e7f.appspot.com',
    messagingSenderId: '903639835213',
    appId: '1:903639835213:web:9ccd0bd01275a0c7bbb204'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;