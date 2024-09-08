import React from "react";
import { motion } from "framer-motion";

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
      <div className="w-1 mr-4 bg-border-primary rounded-2xl">
        <motion.div
          animate={{ top: `${relativeDist}%` }}
          className={`w-1 bg-border-selected relative rounded-2xl h-1/${sections.length}`}
        >
          &nbsp;
        </motion.div>
      </div>
      <div>
        {sections.map((section) => {
          return (
            <motion.div
              key={section}
              className="text-text-primary cursor-pointer text-lg font-medium p-0.5"
              whileHover={{ x: 5 }}
              onClick={() => {
                setSelectedSection(section);
              }}
            >
              {section}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Navigator;
