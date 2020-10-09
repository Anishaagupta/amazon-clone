import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp( {
    apiKey: "AIzaSyA8Xts6mDz0LSzJZeqkuG09xD5aV9ng5aE",
    authDomain: "fir-4739e.firebaseapp.com",
    databaseURL: "https://fir-4739e.firebaseio.com",
    projectId: "fir-4739e",
    storageBucket: "fir-4739e.appspot.com",
    messagingSenderId: "191420029544",
    appId: "1:191420029544:web:be250846013fd8461b39dd",
    measurementId: "G-2Q7ELJ9WHJ"
});


  const auth = firebase.auth();

  export {auth};