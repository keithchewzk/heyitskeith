import React from "react";
import styles from "./AppBar.module.css";
import GoTos from "./GoTos";
import { ReactComponent as SunIcon } from "./assets/sun.svg";
import { ReactComponent as MoonIcon } from "./assets/moon.svg";
import { motion } from "framer-motion";

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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {isDark ? (
          <SunIcon
            className={styles.icon}
            onClick={() => {
              setIsDark(!isDark);
            }}
          />
        ) : (
          <MoonIcon
            className={styles.icon}
            onClick={() => {
              setIsDark(!isDark);
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default AppBar;
