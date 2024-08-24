import styles from "./MessageInput.module.css";

interface Message {
  assistant?: string;
  user?: string;
}

function MessageInput() {
  return (
    <div className={styles.messageInputContainer}>
      <div>Input</div>
      <div className={styles.iconContainer}>
        <img
          style={{ width: "20px", height: "20px" }}
          src={require("./arrowUp.svg").default}
          alt="mySvgImage"
        />
      </div>
    </div>
  );
}

export default MessageInput;
