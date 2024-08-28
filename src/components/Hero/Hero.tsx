import React from "react";
import { greeting, header, subheader } from "./constants";

function Hero() {
  return (
    <div>
      <p className="text-8xl font-medium mb-4">{greeting}</p>
      <p className="text-6xl font-medium mb-4">{header}</p>
      <p className="text-lg text-text-secondary">{subheader}</p>
    </div>
  );
}

export default Hero;
