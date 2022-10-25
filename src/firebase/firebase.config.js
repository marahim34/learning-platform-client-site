// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFA8C_sth2TylCGwpI40fl8FrW8nGgAKM",
    authDomain: "e-learning-hero.firebaseapp.com",
    projectId: "e-learning-hero",
    storageBucket: "e-learning-hero.appspot.com",
    messagingSenderId: "454356355936",
    appId: "1:454356355936:web:212bb8594c17ccec896c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;