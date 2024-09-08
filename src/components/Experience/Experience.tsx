import React, { useState } from "react";
import Job from "./Job";
import { JOBS } from "./constants";

interface JobProps {
  id: string;
  role: string;
  company: string;
  description: string;
  additionalDescription: Array<string> | undefined;
  dateRange: string;
  skills: Array<string>;
}

function Experience() {
  JOBS.sort((a, b) => Number(b.id) - Number(a.id));
  // const [jobs, setJobs] = useState<JobProps[]>(JOBS);

  // useEffect(() => {
  //   fetch(
  //     "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/experiences"
  //   )
  //     .then((response) => response.json())
  //     .then((responseObject) => setJobs(responseObject.experiences))
  //     .catch((error) => {
  //       console.error(error);
  //       setJobs(jobsArray);
  //     });
  // }, []);

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
