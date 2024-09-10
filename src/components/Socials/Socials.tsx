import { motion } from "framer-motion";
import { ReactComponent as ResumeIcon } from "./assets/resume.svg";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "./assets/email.svg";

function Socials() {
  const icons = [
    { Component: ResumeIcon, key: "resume" },
    { Component: EmailIcon, key: "email" },
    { Component: GithubIcon, key: "github" },
    { Component: LinkedinIcon, key: "linkedin" },
  ];

  return (
    <div className="flex gap-5 mt-auto">
      {icons.map(({ Component, key }) => (
        <motion.div
          key={key}
          initial={{ scale: 1, opacity: 0.5 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Component className="w-7 h-7 cursor-pointer fill-text-primary" />
        </motion.div>
      ))}
    </div>
  );
}

export default Socials;
