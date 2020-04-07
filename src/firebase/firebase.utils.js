import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVw3RVS_6sjU9x2fKbKYOPu8-Yf_kqFlQ",
    authDomain: "crwn-db-acef5.firebaseapp.com",
    databaseURL: "https://crwn-db-acef5.firebaseio.com",
    projectId: "crwn-db-acef5",
    storageBucket: "crwn-db-acef5.appspot.com",
    messagingSenderId: "262404121269",
    appId: "1:262404121269:web:9e2f5ec21784bab97214fc",
    measurementId: "G-NQK9BYRSL3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;