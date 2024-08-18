import React from "react";
import styles from "./AppBar.module.css";
import GoTos from "./GoTos";

function AppBar() {
  return (
    <div className={styles.appBarContainer}>
      <text className={styles.brandText}>heyItsKeith</text>
      <GoTos />
    </div>
  );
}

export default AppBar;
