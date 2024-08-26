import React from "react";
import styles from "./AppBar.module.css";
import GoTos from "./GoTos";

interface Props {
  isDark: boolean;
  setIsDark: Function;
}

function AppBar({ isDark, setIsDark }: Props) {
  return (
    <div className={styles.appBarContainer}>
      {/* Personal brand icon */}
      <p className={styles.brandText}>Keith Chew</p>

      {/* Go To buttons */}
      <GoTos />

      {/* Dark theme switch */}
      <div
        className={styles.switchBackground}
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        <div
          className={`${styles.switch} ${
            isDark ? styles.switchOn : styles.switchOff
          }`}
        ></div>
      </div>
    </div>
  );
}

export default AppBar;
