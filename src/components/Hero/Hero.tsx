import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <text className={styles.heroTitle}>Hi, I'm Keith</text>
      <text className={styles.heroSubtitle}>
        Aspiring AI and Software Engineer
      </text>
    </div>
  );
}

export default Hero;
