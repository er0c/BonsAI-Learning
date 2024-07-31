// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { provider, auth } from '../../utils/firebase'; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './css/login.css';
import './css/style.css';

const login = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      router.push('/Home');
    }
  }, [user]);

  if (loading) {
    return (
      <div className='ColumnContainer'>
        <div className='TextContainer'>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const handleSignInWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <img
        src="/Bonsai.png"
        alt="Profile"
        className="profileImage"
      />
      <div className='TextContainer'>
        <h1>BonsAi-Learning</h1>
        <p>Ai Literacy Done Easy!</p>
      </div>
      {error && <p className='error-message'>{error}</p>}
      <button className='google-signIn-btn' onClick={handleSignInWithGoogle}>
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
        Sign In with Google
      </button>
    </div>
  );
};

export default login;
