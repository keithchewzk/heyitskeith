import React, { useState } from "react";
import styles from "./Conversation.module.css";

interface Message {
  assistant?: string;
  user?: string;
}

interface Props {
  conversation: Message[];
  addToConversation: Function;
}

function Conversation({ conversation, addToConversation }: Props) {
  return (
    <div className={styles.conversationContainer}>
      {conversation.map((messageItem: Message, index) => {
        const role = Object.keys(messageItem)[0];
        const message = Object.values(messageItem)[0];
        return (
          <div
            key={index}
            className={
              role === "user" ? styles.messageRowLeft : styles.messageRowRight
            }
          >
            <div className={styles.messageContainer}>
              <span className={styles.message}>{message}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Conversation;
