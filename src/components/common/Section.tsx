import React from "react";
import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode;
  header: string;
}

function Section({ children, header }: Props) {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionHeader}> &gt; {header}</h2>
      {children}
    </div>
  );
}

export default Section;
