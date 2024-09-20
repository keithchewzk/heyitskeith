import React from "react";
import { aboutMeParaOne, aboutMeParaTwo } from "./constants";

function About() {
  return (
    <div className="opacity-0 animate-fade-in">
      <p className="mb-5 text-text-muted">{aboutMeParaOne}</p>
      <p className="text-text-muted">{aboutMeParaTwo}</p>
    </div>
  );
}

export default About;
