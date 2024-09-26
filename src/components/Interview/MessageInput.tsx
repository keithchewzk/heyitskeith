import React, { useState } from "react";
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
    <form id="messageForm" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center bg-[var(--app-box-color-light)] rounded-full pl-4 pr-2 py-2">
        <input
          className="bg-transparent border-none w-full text-[var(--app-large-text-color)] text-base focus:outline-none"
          name="userMessange"
          type="string"
          placeholder="Talk to me"
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
          className="flex justify-center items-center bg-[var(--app-box-color-dark)] p-2.5 border-none rounded-full"
          disabled={!submittable}
        >
          <img
            className="w-3 h-3"
            src={require("assets/arrowUp.svg").default}
            alt="Arrow pointing upwads"
          />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
