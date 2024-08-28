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
      <p className="text-lg text-text-tertiary font-semibold mb-1">
        {dateRange}
      </p>
      <p className="text-2xl font-medium">{role}</p>
      <p className="text-xl mb-2">{company}</p>
      <p className="text-md mb-5 text-text-secondary">{description}</p>
      <Skills skills={skills} />
    </div>
  );
}

export default Job;
