import React from "react";
import { JOURNEY_ITEMS } from "./constants";
import styles from "./Timeline.module.css";
import Experience from "./Experience";

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {JOURNEY_ITEMS.map((item, index) => {
        const isPositionLeft = index % 2 === 0;
        return (
          <div
            key={index}
            style={{ flexDirection: isPositionLeft ? "row" : "row-reverse" }}
            className={styles.timelineRow}
          >
            <Experience
              title={item.title}
              description={item.description}
              startDate={item.startDate}
              endDate={item.endDate}
              isPositionLeft={isPositionLeft}
            />
            <div className={styles.verticalLine}></div>
            <div className={styles.blankContainer}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
