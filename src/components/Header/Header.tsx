import React from "react";
import styles from "./Header.module.css";
import GoTos from "./GoTos";

function Header() {
  return (
    <div className={styles.header}>
      <text className={styles.headerLeftText}>heyItsKeith</text>
      <GoTos />
    </div>
  );
}

export default Header;
