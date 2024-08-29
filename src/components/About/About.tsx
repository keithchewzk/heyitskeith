import React from "react";
import { aboutMeParaOne, aboutMeParaTwo } from "./constants";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-28"
    >
      <p className="mb-5 text-text-secondary">{aboutMeParaOne}</p>
      <p className="text-text-secondary">{aboutMeParaTwo}</p>
    </motion.div>
  );
}

export default About;
