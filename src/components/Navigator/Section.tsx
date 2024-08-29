import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface Props {
  section: string;
}

function Section({ section }: Props) {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"],
  // });
  // useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
  //   console.log("Page scroll: ", latest);
  // });
  // function setSelectedSection(section: any) {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div
      // ref={ref}
      className="text-text-primary text-lg font-semibold pl-4 py-1 border-l-2 hover:border-button-primary cursor-pointer"
      // onClick={() => {
      //   setSelectedSection(section);
      // }}
      // style={{
      //   borderColor:
      //     selectedSection === section
      //       ? "var(--border-selected)"
      //       : "var(--border-primary)",
      // }}
    >
      {section}
      {/* <div className="bg-white" style={{ scale: scrollYProgress }}>
          hello
        </div> */}
    </div>
  );
}

export default Section;
