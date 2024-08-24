import React, { useState } from "react";
import Section from "../common/Section";
import styles from "./Interview.module.css";
import Conversation from "./Conversation";
import MessageInput from "./MessageInput";
interface Message {
  assistant?: string;
  user?: string;
}

function Interview() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [isResponding, setIsResponding] = useState(false);

  async function callGptApi(userPrompt: string) {
    setIsResponding(true);
    await fetch(
      "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/agent",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPrompt: userPrompt,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.statusCode === 200) {
          addToConversation({ assistant: responseData.assistantResponse });
        }
      });
    setIsResponding(false);
  }

  function addToConversation(message: Message) {
    setConversation((conversation) => [...conversation, message]);
    if (message.user) {
      callGptApi(message.user);
    }
  }

  return (
    <Section header="Interview me">
      <div className={styles.chatContainer}>
        <Conversation
          conversation={conversation}
          addToConversation={addToConversation}
        />
        <MessageInput
          addToConversation={addToConversation}
          isResponding={isResponding}
        />
      </div>
    </Section>
  );
}

export default Interview;
