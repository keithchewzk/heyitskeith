import { motion } from "framer-motion";
import { ReactComponent as ResumeIcon } from "./assets/resume.svg";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedinIcon } from "./assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "./assets/email.svg";

function Socials() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/files/keith_chew_resume.pdf`; // Path to the PDF in the public folder
    link.download = "keith_chew_resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the link
  };

  const handleEmail = () => {
    window.location.href = "mailto:keithchewzk@gmail.com";
  };

  const handleLinkRedirect = (link: string) => {
    window.open(link, "_blank"); // Opens the URL in a new tab
  };

  const icons = [
    {
      Component: ResumeIcon,
      key: "resume",
      onClickHandler: handleDownloadResume,
    },
    {
      Component: EmailIcon,
      key: "email",
      onClickHandler: handleEmail,
    },
    {
      Component: GithubIcon,
      key: "github",
      onClickHandler: () => handleLinkRedirect("https://github.com/kippsss"),
    },
    {
      Component: LinkedinIcon,
      key: "linkedin",
      onClickHandler: () =>
        handleLinkRedirect("https://www.linkedin.com/in/keith-chew-36745a1ba/"),
    },
  ];

  return (
    <div className="flex gap-5 mt-20">
      {icons.map(({ Component, key, onClickHandler }) => (
        <motion.div
          key={key}
          initial={{ scale: 1, opacity: 0.5 }}
          whileHover={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={onClickHandler}
        >
          <Component className="w-6 h-6 cursor-pointer fill-text-primary" />
        </motion.div>
      ))}
    </div>
  );
}

export default Socials;
