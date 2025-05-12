import React from "react";
import { aboutMeParaOne } from "./constants";

function About() {
  return (
    <div className="opacity-0 animate-fade-in">
      <p className="text-xl text-text-muted">{aboutMeParaOne}</p>
    </div>
  );
}

export default About;
