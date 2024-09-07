import { useState } from "react";
import Skills from "./Skills";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  role: string;
  company: string;
  description: string;
  additionalDescription: string;
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
      <div
        className="mb-5 -m-2 p-2 cursor-pointer hover:shadow-pop-right hover:translate-x-1 hover:-translate-y-1"
        onClick={() => setShowAdditionalDescription(!showAdditionalDescription)}
      >
        <p className="text-md text-text-secondary mb-1">{description}</p>
        <AnimatePresence>
          {showAdditionalDescription && (
            <motion.p
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {additionalDescription}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <Skills skills={skills} />
    </motion.div>
  );
}

export default Job;
