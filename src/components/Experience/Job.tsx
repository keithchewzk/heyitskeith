import React, { useEffect, useState } from "react";
import styles from "./Job.module.css";
import Skills from "./Skills";

interface Props {
  role: string;
  description: string;
  dateRange: string;
  skills: Array<string>;
  company: string;
}

function Job({ role, description, dateRange, skills, company }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.dateRange}>{dateRange}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.description}>{description}</p>
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default Job;
