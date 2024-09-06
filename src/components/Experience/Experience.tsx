import React, { useEffect, useState } from "react";
import Job from "./Job";
import { jobsArray } from "./constants";

interface JobProps {
  id: string;
  role: string;
  description: string;
  dateRange: string;
  skills: Array<string>;
  company: string;
}

function Experience() {
  jobsArray.sort((a, b) => Number(b.id) - Number(a.id));
  const [jobs, setJobs] = useState<JobProps[]>(jobsArray);

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
      {jobs.map(({ id, role, description, dateRange, skills, company }) => {
        return (
          <Job
            key={id}
            role={role}
            description={description}
            dateRange={dateRange}
            skills={skills}
            company={company}
          />
        );
      })}
    </div>
  );
}

export default Experience;
