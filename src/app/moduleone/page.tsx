// src/app/ModuleOne.tsx
"use client";
import Link from "next/link";
import styles from "../css/moduleone.css"; // Correct import statement

export default function ModuleOne() {
  return (
    <main className={styles.main}>
      <h1>Intro to AI - Module 1</h1>
      <p>Welcome to the first module of AI learning!</p>
      <Link href="/Home">
        Back to Home
      </Link>
    </main>
  );
}
