import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/firestore';

export const firebase={
    apiKey: "AIzaSyD9EkgOUrMNVBAGs25uLqpO3vlhqU1PCX8",
    authDomain: "phoneotp-bd0ee.firebaseapp.com",
    databaseURL: "https://phoneotp-bd0ee-default-rtdb.firebaseio.com",
    projectId: "phoneotp-bd0ee",
    storageBucket: "phoneotp-bd0ee.appspot.com",
    messagingSenderId: "117610587698",
    appId: "1:117610587698:web:ac375976f3c789cd3afe2b",
    measurementId: "G-QTZFSYYBQS"
};
if(!firebase.apps.length){
    firebase.initalizeApp(firebase.config);
}