import React from "react";
import styles from "./GoTos.module.css";

function GoTos() {
  return (
    <div className={styles.goTosContainer}>
      <div className={styles.goToText}>About</div>
      <div className={styles.goToText}>Experiences</div>
      <div className={styles.goToText}>Skills</div>
      <div className={styles.goToText}>AIPlayground</div>
    </div>
  );
}

export default GoTos;
