// src/utils/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrFbxtKa1LaoGF_Gu_dTAOUhMM_Wn0nW4",
  authDomain: "bonsai-learning-5e62c.firebaseapp.com",
  projectId: "bonsai-learning-5e62c",
  storageBucket: "bonsai-learning-5e62c.appspot.com",
  messagingSenderId: "110417523095",
  appId: "1:110417523095:web:7c23faab31e7b8337a94d2",
  measurementId: "G-CS6NTMFK9Q"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, storage };
