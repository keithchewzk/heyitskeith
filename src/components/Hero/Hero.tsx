import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Keith Chew</p>
      <p className={styles.subheader}>Aspiring AI and Software Engineer</p>
      <p className={styles.description}>
        I like to code, learn new technologies, and build software.
      </p>
    </div>
  );
}

export default Hero;
