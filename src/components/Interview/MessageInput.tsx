import React, { useState } from "react";
import styles from "./MessageInput.module.css";
interface Props {
  addToConversation: Function;
}

function MessageInput({ addToConversation }: Props) {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = { user: userInput };
    addToConversation(message);
    setUserInput("");
  };

  return (
    <div className={styles.messageInputContainer}>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <input
          className={styles.messageInput}
          name="userMessange"
          type="string"
          placeholder="Interview me, fire away!"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>

      <div className={styles.iconContainer}>
        <img
          style={{ width: "15px", height: "15px" }}
          src={require("./arrowUp.svg").default}
          alt="mySvgImage"
        />
      </div>
    </div>
  );
}

export default MessageInput;
