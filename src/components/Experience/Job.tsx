import React, { useEffect, useState } from "react";
import Skills from "./Skills";

interface Props {
  role: string;
  description: string;
  dateRange: string;
  skills: Array<string>;
  company: string;
}

function Job({ role, description, dateRange, skills, company }: Props) {
  return (
    <div className="mb-10">
      <p className="text-lg">{dateRange}</p>
      <p className="text-2xl">{role}</p>
      <p className="text-2xl mb-2">{company}</p>
      <p className="mb-5">{description}</p>
      <Skills skills={skills} />
    </div>
  );
}

export default Job;
