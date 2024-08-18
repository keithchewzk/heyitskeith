import React from "react";
import { JOURNEY_ITEMS } from "./constants";
import styles from "./Timeline.module.css";

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {JOURNEY_ITEMS.map((item) => (
        <div className={styles.timelineRow}>
          <div className={styles.experienceContainer}>{item.title}</div>
          <div className={styles.blankContainer}>e</div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
