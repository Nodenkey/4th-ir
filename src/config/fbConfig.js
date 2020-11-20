import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyrYqbyaHG3XSLVX9yTt1-kDxyNYcVy7s",
    authDomain: "counter-registration.firebaseapp.com",
    databaseURL: "https://counter-registration.firebaseio.com",
    projectId: "counter-registration",
    storageBucket: "counter-registration.appspot.com",
    messagingSenderId: "146038088701",
    appId: "1:146038088701:web:0a3c340b73e2329e17ef94",
    measurementId: "G-G0NXSVL69V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
