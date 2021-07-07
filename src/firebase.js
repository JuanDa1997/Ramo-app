import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6uPowG9q7nNGZ1N_QHH_5ZeF7wTXszjo",
    authDomain: "backend-ramo.firebaseapp.com",
    projectId: "backend-ramo",
    storageBucket: "backend-ramo.appspot.com",
    messagingSenderId: "1082521439487",
    appId: "1:1082521439487:web:c283daf9fbb2c52ec3d0ca"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;