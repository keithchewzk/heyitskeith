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
      {conversation.map((messageItem: Message) => {
        return <div>conversation item</div>;
      })}
    </div>
  );
}

export default Conversation;
