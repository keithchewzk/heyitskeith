import React from "react";

function Agent() {
  return (
    <button
      onClick={() => {
        fetch(
          "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/agent",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userPrompt: "Why should I hire Keith?",
            }),
          }
        );
      }}
    >
      Consult
    </button>
  );
}

export default Agent;
