import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";

interface Props {
  skills: Array<string>;
}

function Skills({ skills }: Props) {
  return (
    <div className={styles.container}>
      {skills.map((skill) => {
        return <span className={styles.skill}>{skill}</span>;
      })}
    </div>
  );
}

export default Skills;
