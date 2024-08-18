import React from "react";
import styles from "./Journey.module.css";
import Timeline from "./Timeline";

function Journey() {
  return (
    <div className={styles.journeyContainer}>
      <text className={styles.journeyHeader}>myJourneyThusFar</text>
      <Timeline />
    </div>
  );
}

export default Journey;
