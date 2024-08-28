import React from "react";
import { aboutMeParaOne, aboutMeParaTwo } from "./constants";

function About() {
  return (
    <div className="mb-20">
      <p className="mb-5">{aboutMeParaOne}</p>
      <p className="">{aboutMeParaTwo}</p>
    </div>
  );
}

export default About;
