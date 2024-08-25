import { useState, useEffect } from "react";
import styles from "./Timeline.module.css";
import Experience from "./Experience";
import ExperienceIcon from "./ExperienceIcon";

interface Experience {
  id: string;
  role: string;
  description: string;
  dateRange: string;
  iconUrl: string;
}

function Timeline() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [experiences, setExperiences] = useState([]);

  const updateIsSmallScreen = () => {
    setIsSmallScreen(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsSmallScreen);
    return () => window.removeEventListener("resize", updateIsSmallScreen);
  });

  useEffect(() => {
    fetch(
      "https://kxaci7u1qe.execute-api.ap-southeast-1.amazonaws.com/prod/experiences"
    )
      .then((response) => response.json())
      .then((responseObject) => setExperiences(responseObject.experiences))
      .catch((error) => console.error(error));
  }, []);

  console.log(experiences);

  return (
    <div className={styles.timelineContainer}>
      {experiences.map(
        ({ id, role, description, dateRange, iconUrl }, index) => {
          const isPositionLeft = index % 2 === 0 && !isSmallScreen;
          return (
            // Each Experience forms a row in the timeline
            <div
              key={id}
              style={{
                flexDirection: isPositionLeft ? "row" : "row-reverse",
              }}
              className={styles.timelineRow}
            >
              {/* Experience component */}
              <Experience
                role={role}
                description={description}
                dateRange={dateRange}
                isPositionLeft={isPositionLeft}
                isSmallScreen={isSmallScreen}
              />
              {/* Line with icon in the middle */}
              <div
                style={{
                  ...(index === experiences.length - 1 && {
                    backgroundColor: "transparent",
                  }),
                }}
                className={styles.verticalLine}
              >
                <ExperienceIcon path={iconUrl} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Timeline;
