import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const fireapp = firebase.initializeApp({

    apiKey: "AIzaSyD7Na7CtKhlSbcsaDYpQQnlh65BbYRnWgo",
    authDomain: "prueba-326916.firebaseapp.com",
    projectId: "prueba-326916",
    storageBucket: "prueba-326916.appspot.com",
    messagingSenderId: "887278701673",
    appId: "1:887278701673:web:d24918606e8b4f2ca0a6f8",
    measurementId: "G-2KXQ9T5E4Y"
});

export const auth = firebase.auth();
export default fireapp;