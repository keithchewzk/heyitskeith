import React from "react";
import styles from "./ExperienceIcon.module.css";

interface Props {
  path: string;
}

function ExperienceIcon({ path }: Props) {
  return (
    <div className={styles.experienceIconContainer}>
      <img
        src="https://heyitskeith-icons.s3.amazonaws.com/cloud.svg"
        alt="some alt"
      />
    </div>
  );
}

export default ExperienceIcon;
