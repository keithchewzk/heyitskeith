import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import Job from "./Job";

interface JobProps {
  id: string;
  role: string;
  description: string;
  dateRange: string;
  iconUrl: string;
}

function Experience() {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    fetch(
      "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/experiences"
    )
      .then((response) => response.json())
      .then((responseObject) => setJobs(responseObject.experiences))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.container}>
      {jobs.map(({ id, role, description, dateRange }) => {
        return (
          <Job
            key={id}
            role={role}
            description={description}
            dateRange={dateRange}
          />
        );
      })}
    </div>
  );
}

export default Experience;
