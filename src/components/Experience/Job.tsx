import React, { useEffect, useState } from "react";
import styles from "./Job.module.css";

interface Props {
  role: string;
  description: string;
  dateRange: string;
}

function Job({ role, description, dateRange }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.dateRange}>{dateRange}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default Job;
