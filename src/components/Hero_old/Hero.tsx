import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.heroTitle}>Hi, I'm Keith</p>
      <p className={styles.heroSubtitle}>Aspiring AI and Software Engineer</p>
    </div>
  );
}

export default Hero;
