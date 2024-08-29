import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Section from "./Section";

function Navigator() {
  const sections = ["About", "Experience", "Interview me"];
  const [selectedSection, setSelectedSection] = useState("About");

  return (
    <div className="flex flex-col">
      {sections.map((section) => {
        return <Section section={section} />;
      })}
    </div>
  );
}

export default Navigator;
