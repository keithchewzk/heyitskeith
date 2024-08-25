import React from "react";
import styles from "./Experience.module.css";

interface Props {
  role: string;
  description: string;
  dateRange: string;
  isPositionLeft: boolean;
  isSmallScreen: boolean;
}

function Experience({
  role,
  description,
  dateRange,
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
        {role}
      </p>
      <p className={styles.experienceDescription}>{description}</p>
      <p
        style={{ textAlign: isPositionLeft ? "right" : "left" }}
        className={styles.experienceDateRange}
      >
        {dateRange}
      </p>
    </div>
  );
}

export default Experience;
