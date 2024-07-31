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
        <img
          src="/leaves1 (3).png"
          alt="Leaf 1"
          className="branch1"
        />
        <div className="branch1-v2">Advanced Topics</div>
        <img
          src="/leaves2 (3).png"
          alt="Leaf 2"
          className="branch2"
        />
        <div className="branch2-v2">AI Ethics</div>

        <img
          src="/leaves2 (2).png"
          alt="Leaf 3"
          className="branch3"
        />
        <div className="branch3-v2">Machine Learning Basics</div>

        <Link href="/moduleone">
          <div className="root1">
            <img
              src="/root.png"
              className="root1"
            />
            <div className="root2">Intro to AI</div>
          </div>
        </Link>

        <img
          src="/leaves4 (1).png"
          alt="Leaf 3"
          className="branch4"
        />
        <div className="branch4-v2">AI Applications</div>
        <div className="dirt"></div>
        <div className="topdirt"></div>
      </div>
    </main>
  );
}
