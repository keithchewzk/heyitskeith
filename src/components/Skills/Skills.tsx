import React, { useEffect } from "react";
import Section from "../common/Section";
import { useState } from "react";
import { CATEGORIES } from "./constants";
import styles from "./Skills.module.css";

interface Skill {
  skill: string;
  category: string;
}

function Skills() {
  // const [categories, setCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch(
      "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/skills"
    )
      .then((response) => response.json())
      .then((json) => setSkills(json.Items))
      // .then(() => setCategories(skills.map((skill) => skill.category)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Section header="Skills">
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((item: string) => {
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
        {skills.map((item: Skill) => {
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
