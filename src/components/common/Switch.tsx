import React from "react";
import styles from "./Switch.module.css";

interface Props {
  value: boolean;
  onClick: Function;
}

function Switch({ value, onClick }: Props) {
  return (
    <div
      className={`${styles.switchBackground} ${
        value ? styles.switchBackgroundOn : styles.switchBackgroundOff
      }`}
      onClick={() => {
        onClick(!value);
      }}
    >
      <div
        className={`${styles.switch} ${
          value ? styles.switchOn : styles.switchOff
        }`}
      ></div>
    </div>
  );
}

export default Switch;
