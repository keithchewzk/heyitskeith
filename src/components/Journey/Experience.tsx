import React from "react";
import styles from "./Experience.module.css";

interface Props {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isPositionLeft: boolean;
  isSmallScreen: boolean;
}

function Experience({
  title,
  description,
  startDate,
  endDate,
  isPositionLeft,
  isSmallScreen,
}: Props) {
  return (
    <div
      style={{ width: isSmallScreen ? "100%" : "calc(50% - 1px)" }}
      className={styles.experienceContainer}
    >
      <p
        style={{ textAlign: isPositionLeft ? "right" : "left" }}
        className={styles.experienceTitle}
      >
        {title}
      </p>
      <p
        style={{ textAlign: isPositionLeft ? "right" : "left" }}
        className={styles.experienceDescription}
      >
        {description}
      </p>
      <p
        style={{ textAlign: isPositionLeft ? "right" : "left" }}
        className={styles.experienceDateRange}
      >
        {startDate} - {endDate}
      </p>
    </div>
  );
}

export default Experience;
