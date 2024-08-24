import React, { useState } from "react";
import Section from "../common/Section";
import styles from "./Interview.module.css";
import Conversation from "./Conversation";
interface Message {
  assistant?: string;
  user?: string;
}

function Interview() {
  const [conversation, setConversation] = useState<Message[]>([
    { assistant: "Interview me!" },
    { user: "Tell me why you are fit for this job" },
  ]);

  function addToConversation(message: Message) {
    setConversation((conversation) => [...conversation, message]);
  }

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
    <Section header="Interview me">
      <div className={styles.chatContainer}>
        <Conversation
          conversation={conversation}
          addToConversation={addToConversation}
        />
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

export default Interview;
