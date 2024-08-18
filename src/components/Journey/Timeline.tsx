import { useState, useEffect } from "react";
import { JOURNEY_ITEMS } from "./constants";
import styles from "./Timeline.module.css";
import Experience from "./Experience";
import ExperienceIcon from "./ExperienceIcon";

function Timeline() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  const updateIsSmallScreen = () => {
    setIsSmallScreen(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsSmallScreen);
    return () => window.removeEventListener("resize", updateIsSmallScreen);
  });

  return (
    <div className={styles.timelineContainer}>
      {JOURNEY_ITEMS.map((item, index) => {
        const isPositionLeft = index % 2 === 0 && !isSmallScreen;
        return (
          <div
            key={index}
            style={{
              flexDirection: isPositionLeft ? "row" : "row-reverse",
            }}
            className={styles.timelineRow}
          >
            <Experience
              title={item.title}
              description={item.description}
              startDate={item.startDate}
              endDate={item.endDate}
              isPositionLeft={isPositionLeft}
              isSmallScreen={isSmallScreen}
            />
            <div className={styles.verticalLine}>
              <ExperienceIcon path={item.iconPath} />
            </div>
            {!isSmallScreen && <div className={styles.blankContainer}></div>}
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
