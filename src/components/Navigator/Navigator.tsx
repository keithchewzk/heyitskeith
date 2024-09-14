import React from "react";

interface Props {
  selectedSection: string;
  setSelectedSection: Function;
}

function Navigator({ selectedSection, setSelectedSection }: Props) {
  const sections = ["About", "Experience", "Interview me"];
  const relativeDist =
    (sections.indexOf(selectedSection) * 100) / sections.length;

  return (
    <div className="flex flex-row">
      <div className="w-1 mr-4 bg-border-primary rounded-2xl relative">
        <div
          style={{ top: `${relativeDist}%` }}
          className={`w-1 bg-border-selected absolute rounded-2xl h-1/${sections.length}`}
        >
          &nbsp;
        </div>
      </div>
      <div>
        {sections.map((section) => (
          <div
            key={section}
            className="text-text-primary cursor-pointer text-lg font-medium p-0.5 transition-transform duration-300 ease-out hover:translate-x-1"
            onClick={() => setSelectedSection(section)}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigator;
