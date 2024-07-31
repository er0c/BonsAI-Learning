// src/app/page.tsx
"use client";
import "../css/home.css";
import { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '/utils/firebase'; 
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('//'); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <main className="main">
      <button className="signOut-btn" onClick={handleSignOut}>Sign Out</button>
      <h1>BonsAI-Learning</h1>
      <p className="description">
        Personalized AI learning. Gamified.
      </p>
      <div className="tree">
        <div className="trunk"></div>
        <div className="branch branch-top"></div>
        <div className="branch branch-middle"></div>
        <div className="branch branch-bottom"></div>
        <div className="leaf leaf-left-top"></div>
        <div className="leaf leaf-right-top"></div>
        <div className="leaf leaf-left-middle"></div>
        <div className="leaf leaf-right-middle"></div>
        <div className="leaf leaf-left-bottom"></div>
        <div className="leaf leaf-right-bottom"></div>
        <Link href="/moduleone">
          <div className="root">
            <div>Intro to AI</div>
          </div>
        </Link>
      </div>
    </main>
  );
}
