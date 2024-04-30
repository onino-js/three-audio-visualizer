"use client";
import styles from "./page.module.css";
import { AudioWebglPlayer } from "./components/AudioVisualizer/AudioWebglPlayer";

export default function Home() {
  return (
    <main className={styles.main}>
     <AudioWebglPlayer />
    </main>
  );
}
