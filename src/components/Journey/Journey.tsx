import React from "react";
import styles from "./Journey.module.css";
import Timeline from "./Timeline";

function Journey() {
  return (
    <div className={styles.journeyContainer}>
      <p className={styles.journeyHeader}>myJourneyThusFar</p>
      <Timeline />
    </div>
  );
}

export default Journey;
