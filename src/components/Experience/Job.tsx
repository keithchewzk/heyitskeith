import Skills from "./Skills";
import { motion } from "framer-motion";

interface Props {
  role: string;
  description: string;
  dateRange: string;
  skills: Array<string>;
  company: string;
}

function Job({ role, description, dateRange, skills, company }: Props) {
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
      className="mb-10"
    >
      <p className="text-lg text-text-tertiary font-semibold mb-1">
        {dateRange}
      </p>
      <p className="text-2xl font-medium">{role}</p>
      <p className="text-xl mb-2">{company}</p>
      <p className="text-md mb-5 text-text-secondary">{description}</p>
      <Skills skills={skills} />
    </motion.div>
  );
}

export default Job;
