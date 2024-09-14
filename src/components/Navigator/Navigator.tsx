import React, { useEffect, useMemo, useState } from "react";

interface Props {
  selectedSection: string;
  setSelectedSection: Function;
}

function Navigator({ selectedSection, setSelectedSection }: Props) {
  const sections = useMemo(() => ["About", "Experience", "Interview me"], []);
  const [indicatorTop, setIndicatorTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section.toLowerCase());
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;

          // Check if the section is within view (at least partially)
          if (
            sectionTop >= 0 &&
            sectionTop < window.innerHeight - sectionHeight / 2
          ) {
            setSelectedSection(section);
            setIndicatorTop((index * 100) / sections.length);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, setSelectedSection]);

  const handleScrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section.toLowerCase());
    if (sectionElement) {
      // Adjust the scroll position with a top offset
      window.scrollTo({
        top: sectionElement.offsetTop - 80, // Adjust the offset value (80px here) as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-1 mr-4 bg-border-primary rounded-2xl relative">
        <div
          style={{ top: `${indicatorTop}%` }}
          className={`w-1 bg-border-selected absolute rounded-2xl h-1/3 transition-all duration-300 ease-out`}
        >
          &nbsp;
        </div>
      </div>
      <div>
        {sections.map((section) => (
          <div
            key={section}
            className={`text-text-primary cursor-pointer text-lg font-medium p-0.5 transition-transform duration-300 ease-out hover:translate-x-1 ${
              selectedSection === section ? "font-bold" : ""
            }`}
            onClick={() => {
              handleScrollToSection(section);
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigator;
