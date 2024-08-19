import React from "react";
import styles from "./GoTos.module.css";

function GoTos() {
  return (
    <div className={styles.goTosContainer}>
      <div className={styles.goToText}>
        <span>About</span>
      </div>
      <div className={styles.goToText}>
        <span>Experiences</span>
      </div>
      <div className={styles.goToText}>
        <span>Skills</span>
      </div>
      <div className={styles.goToText}>
        <span>AIPlayground</span>
      </div>
    </div>
  );
}

export default GoTos;
