import React, { useState } from "react";
import styles from "./AppBar.module.css";
import GoTos from "./GoTos";
import Switch from "../common/Switch";

function AppBar() {
  const [switchOn, setSwitchOn] = useState();
  return (
    <div className={styles.appBarContainer}>
      <p className={styles.brandText}>heyItsKeith</p>
      <GoTos />
      <Switch value={false} onClick={() => {}} />
    </div>
  );
}

export default AppBar;
