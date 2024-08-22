import React from "react";
import OpenAI from "openai";

function Agent() {
  return (
    <button
      onClick={() => {
        console.log("hello");
      }}
    >
      Consult
    </button>
  );
}

export default Agent;
