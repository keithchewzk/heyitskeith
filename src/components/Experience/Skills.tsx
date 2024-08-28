import React, { useEffect, useState } from "react";

interface Props {
  skills: Array<string>;
}

function Skills({ skills }: Props) {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <span className="inline-block text-lg rounded-full bg-slate-800 px-4 py-1 mb-2 mr-4">
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default Skills;
