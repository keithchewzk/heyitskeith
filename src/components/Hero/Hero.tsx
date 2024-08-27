import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <span className={styles.header}>Keith Chew</span>
      <span className={styles.subheader}>
        Aspiring AI and Software Engineer
      </span>
      <span className={styles.description}>
        I like to code, learn new technologies, and build software.
      </span>
    </div>
  );
}

export default Hero;
