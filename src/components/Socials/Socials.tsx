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
        <div>
          <Component
            key={key}
            className="w-7 h-7 cursor-pointer fill-box-color hover:fill-text-secondary"
          />
        </div>
      ))}
    </div>
  );
}

export default Socials;
