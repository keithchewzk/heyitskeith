import { useState } from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";

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

  const variants = {
    initial: (direction: number) => ({
      y: direction > 0 ? 50 : -50, // Swipe out down or up
      opacity: 0,
    }),
    animate: {
      y: 0, // Set it to the original position when animating
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -50 : 50, // Swipe in down or up
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

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
      <p className="text-xl mb-2">{company}</p>
      <div
        className="mb-5 cursor-pointer"
        onClick={() => setShowAdditionalDescription(!showAdditionalDescription)}
      >
        <p className="text-md text-text-secondary">
          {showAdditionalDescription ? additionalDescription : description}
        </p>
      </div>
      <Skills skills={skills} />
    </motion.div>
  );
}

export default Job;
