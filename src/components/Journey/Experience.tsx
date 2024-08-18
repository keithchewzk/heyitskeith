import React from "react";
import styles from "./Experience.module.css";

interface Props {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isPositionLeft: boolean;
}

function Experience({
  title,
  description,
  startDate,
  endDate,
  isPositionLeft,
}: Props) {
  return (
    <div className={styles.experienceContainer}>
      <p className={styles.experienceTitle}>{title}</p>
      <p className={styles.experienceDescription}>{description}</p>
      <p className={styles.experienceDateRange}>
        {startDate} - {endDate}
      </p>
    </div>
  );
}

export default Experience;
