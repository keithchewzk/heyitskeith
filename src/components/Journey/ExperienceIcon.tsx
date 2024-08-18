import React from "react";
import styles from "./ExperienceIcon.module.css";

interface Props {
  path: string;
}

function ExperienceIcon({ path }: Props) {
  return (
    <div className={styles.experienceIconContainer}>
      <img
        src="https://heyitskeith-assets.s3.ap-southeast-1.amazonaws.com/cloud.svg"
        alt=""
        className={styles.experienceIcon}
      />
    </div>
  );
}

export default ExperienceIcon;
