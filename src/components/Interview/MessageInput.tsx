import React, { useState } from "react";
import styles from "./MessageInput.module.css";
interface Props {
  addToConversation: Function;
  isResponding: boolean;
}

function MessageInput({ addToConversation, isResponding }: Props) {
  const [userInput, setUserInput] = useState("");
  const [submittable, setSubmittable] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isResponding);
    const message = { user: userInput };
    addToConversation(message);
    setUserInput("");
    setSubmittable(false);
  };

  return (
    <form id="messageForm" style={{ width: "100%" }} onSubmit={handleSubmit}>
      <div className={styles.messageInputContainer}>
        <input
          className={styles.messageInput}
          name="userMessange"
          type="string"
          placeholder="Interview me, fire away!"
          value={userInput}
          onChange={(e) => {
            const currentInput = e.target.value;
            setUserInput(currentInput);
            setSubmittable(currentInput !== "" && !isResponding ? true : false);
          }}
        />
        <button
          form="messageForm"
          type="submit"
          className={styles.iconButton}
          disabled={!submittable}
        >
          <img
            style={{ width: "15px", height: "15px" }}
            src={require("./arrowUp.svg").default}
            alt="Arrow pointing upwads"
          />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
