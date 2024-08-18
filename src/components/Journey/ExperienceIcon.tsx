import React from "react";
import styles from "./ExperienceIcon.module.css";

interface Props {
  path: string;
}

function ExperienceIcon({ path }: Props) {
  return (
    <div className={styles.experienceIconContainer}>
      <img src={path} alt="" className={styles.experienceIcon} />
    </div>
  );
}

export default ExperienceIcon;
