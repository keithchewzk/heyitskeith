import React from "react";

interface Message {
  assistant?: string;
  user?: string;
}

interface Props {
  conversation: Message[];
}

function Conversation({ conversation }: Props) {
  return (
    <div className="min-h-80 overflow-y-auto">
      {conversation.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src={require("./headshot.svg").default}
            alt="Arrow pointing upwads"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-9">
          {conversation.map((messageItem: Message, index) => {
            const role = Object.keys(messageItem)[0];
            const message = Object.values(messageItem)[0];
            return (
              <div
                key={index}
                className={`flex flex-row ${
                  role === "user" ? "justify-end pl-14" : "justify-start pr-14"
                }`}
              >
                {role === "assistant" && (
                  <img
                    className="h-10 w-10 pr-3"
                    src={require("./headshot.svg").default}
                    alt="Arrow pointing upwads"
                  />
                )}
                <div
                  className={
                    role === "user"
                      ? "text-md rounded-lg bg-box-color px-3 py-2"
                      : "flex flex-col justify-center"
                  }
                >
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
