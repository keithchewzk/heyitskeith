import { useState } from "react";
import Skills from "./Skills";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  role: string;
  company: string;
  description: string;
  additionalDescription: Array<string> | undefined;
  dateRange: string;
  skills: Array<string>;
}

function Job({
  role,
  description,
  additionalDescription,
  dateRange,
  skills,
  company,
}: Props) {
  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState<boolean>(false);

  return (
    <motion.div
      initial={{
        x: 20,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <p className="text-lg text-text-tertiary font-semibold mb-1">
        {dateRange}
      </p>
      <p className="text-2xl font-medium">{role}</p>
      <p className="text-xl mb-3">{company}</p>
      <motion.div
        className="mb-3 -m-2 p-2 cursor-pointer"
        onHoverStart={() => setShowAdditionalDescription(true)}
        onHoverEnd={() => setShowAdditionalDescription(false)}
      >
        <p className="text-md text-text-secondary mb-2">{description}</p>
        <AnimatePresence>
          {showAdditionalDescription && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {additionalDescription &&
                additionalDescription.map((desc, index) => (
                  <div key={index} className="flex">
                    <p className="mr-1">•</p>
                    <p className="text-md text-text-secondary mb-1">{desc}</p>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Skills skills={skills} />
    </motion.div>
  );
}

export default Job;
