import React from "react";
import styles from "./Conversation.module.css";

interface Message {
  assistant?: string;
  user?: string;
}

interface Props {
  conversation: Message[];
}

function Conversation({ conversation }: Props) {
  return (
    <div className={styles.conversationContainer}>
      {conversation.length === 0 ? (
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src={require("./headshot.svg").default}
            alt="Arrow pointing upwads"
          />
        </div>
      ) : (
        <div>
          {conversation.map((messageItem: Message, index) => {
            const role = Object.keys(messageItem)[0];
            const message = Object.values(messageItem)[0];
            return (
              <div
                key={index}
                className={
                  role === "user"
                    ? styles.messageRowLeft
                    : styles.messageRowRight
                }
              >
                <div className={styles.messageContainer}>
                  <span className={styles.message}>{message}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Conversation;
