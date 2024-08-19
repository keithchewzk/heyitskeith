import React from "react";
import Section from "../common/Section";
import { CATEGORIES, SKILLS } from "./constants";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <Section header="Skills">
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((item) => {
          return <button className={styles.categoryButton}>{item}</button>;
        })}
      </div>
      <div className={styles.skillsContainer}>
        {SKILLS.map((item) => {
          return (
            <div key={item.skill} className={styles.skillContainer}>
              <span className={styles.skillText}>{item.skill}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
