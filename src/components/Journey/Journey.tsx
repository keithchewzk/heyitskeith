import React from "react";
import styles from "./Journey.module.css";
import Timeline from "./Timeline";

function Journey() {
  return (
    <div className={styles.journeyContainer}>
      <p className={styles.journeyHeader}> &gt; what i've been up to</p>
      <Timeline />
    </div>
  );
}

export default Journey;
