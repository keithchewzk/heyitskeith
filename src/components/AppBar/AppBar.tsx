import React from "react";
import styles from "./AppBar.module.css";
import GoTos from "./GoTos";

function AppBar() {
  return (
    <div className={styles.appBarContainer}>
      <p className={styles.brandText}>heyItsKeith</p>
      <GoTos />
    </div>
  );
}

export default AppBar;
