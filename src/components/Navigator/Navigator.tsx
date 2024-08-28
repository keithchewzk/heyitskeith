import React, { useState } from "react";

function Navigator() {
  const sections = ["About", "Experience", "Interview me"];
  const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div className="flex flex-col">
      {sections.map((section) => {
        return (
          <div
            className="text-text-primary text-lg font-semibold pl-4 py-1 border-l-2 hover:border-button-primary cursor-pointer"
            onClick={() => {
              setSelectedSection(section);
            }}
            style={{
              borderColor:
                selectedSection === section
                  ? "var(--border-selected)"
                  : "var(--border-primary)",
            }}
          >
            {section}
          </div>
        );
      })}
    </div>
  );
}

export default Navigator;
