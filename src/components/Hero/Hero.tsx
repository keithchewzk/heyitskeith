import React from "react";
import { greeting, header, subheader } from "./constants";

function Hero() {
  return (
    <div className="mb-20">
      <p className="text-8xl font-medium mb-4">{greeting}</p>
      <p className="text-6xl font-medium mb-6">{header}</p>
      <p className="text-2xl text-text-secondary">{subheader}</p>
    </div>
  );
}

export default Hero;
