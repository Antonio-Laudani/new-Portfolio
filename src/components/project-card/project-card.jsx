import '../../styles/project-card/project-card.css';

const ProjectCard = ({ tag, title, detailedDescription, tech, link }) => {
  return (
    <div className="glass-project-card group mt-20 flex flex-col font-semibold ">
      <div className="project-tag w-fit">{tag}</div>
      <h3>{title}</h3>
      
      <div /*className="
  transform transition-all duration-300
  opacity-100 translate-y-0
  lg:opacity-0 lg:translate-y-8
  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
"*/>

        <p className="text-sm mb-4">
          {detailedDescription}
        </p>

        <div className="m-4 flex justify-end">
         <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    glass-button group relative inline-flex items-center overflow-hidden"
>

            <span className="absolute -left-full flex items-center transition-all duration-300 group-hover:left-4">
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="relative text-sm font-medium transition-all duration-300 group-hover:ml-4">
              View Project
            </span>
          </a>
        </div>
      </div>
      
      <div className="project-tech mt-auto">
        {tech.map((techName, index) => (
          <span key={index}>{techName}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;