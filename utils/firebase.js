import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrFbxtKa1LaoGF_Gu_dTAOUhMM_Wn0nW4",
  authDomain: "bonsai-learning-5e62c.firebaseapp.com",
  projectId: "bonsai-learning-5e62c",
  storageBucket: "bonsai-learning-5e62c.appspot.com",
  messagingSenderId: "110417523095",
  appId: "1:110417523095:web:7c23faab31e7b8337a94d2",
  measurementId: "G-CS6NTMFK9Q"
};

// Initializes Firebase
if (!firebase.apps.length){
    const app = initializeApp(firebaseConfig);
}
const firestore = firebase.firestore;
const analytics = getAnalytics(app);

export {firestore};