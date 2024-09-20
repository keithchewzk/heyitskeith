interface Props {
  skills: Array<string>;
}

function Skills({ skills }: Props) {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <span
            key={skill}
            className="inline-block text-md rounded-lg font-medium bg-background-secondary text-text-primary leading-6 px-3 pt-1 mb-3 mr-3"
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}

export default Skills;
