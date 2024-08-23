import React from "react";
import Section from "../common/Section";
import styles from "./Agent.module.css";
// import { ReactComponent as ArrowUp } from "public/icons/arrowUp.svg";

function Agent() {
  return (
    // <button
    //   onClick={() => {
    //     fetch(
    //       "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/agent",
    //       {
    //         method: "POST",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           userPrompt: "Why should I hire Keith?",
    //         }),
    //       }
    //     );
    //   }}
    // >
    //   Consult
    // </button>
    <Section header="Chat with me">
      <div className={styles.chatContainer}>
        <div className={styles.chatInputContainer}>
          <div>Input</div>
          <div className={styles.iconContainer}>
            <img
              style={{ width: "20px", height: "20px" }}
              src={require("./arrowUp.svg").default}
              alt="mySvgImage"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Agent;
