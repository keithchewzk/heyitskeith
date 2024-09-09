import React from "react";
import Job from "./Job";
import { JOBS } from "./constants";

function Experience() {
  JOBS.sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <div>
      {JOBS.map(
        ({
          id,
          role,
          company,
          description,
          additionalDescription,
          dateRange,
          skills,
        }) => {
          return (
            <Job
              key={id}
              role={role}
              description={description}
              additionalDescription={additionalDescription}
              dateRange={dateRange}
              skills={skills}
              company={company}
            />
          );
        }
      )}
    </div>
  );
}

export default Experience;
