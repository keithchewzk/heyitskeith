import React from "react";
import Section from "../common/Section";
import { useState } from "react";
import { CATEGORIES, SKILLS } from "./constants";
import styles from "./Skills.module.css";
import { getSkills } from "./getSkills";

function Skills() {
  const [category, setCategory] = useState("all");
  return (
    <Section header="Skills">
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((item) => {
          return (
            <button
              key={item}
              onMouseEnter={() => setCategory(item)}
              onMouseLeave={() => setCategory("all")}
              className={styles.categoryButton}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className={styles.skillsContainer}>
        {SKILLS.map((item) => {
          return (
            <div key={item.skill} className={styles.skillContainer}>
              <span
                style={{
                  opacity:
                    item.category === category || category === "all" ? 1 : 0.05,
                }}
                className={styles.skillText}
              >
                {item.skill}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
