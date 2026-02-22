import { useState } from "react";
import '../../styles/project-card/project-card.css';

const ProjectCard = ({ tag, title, detailedDescription, tech, link }) => {
   const [expanded, setExpanded] = useState(false);

  const wordLimit = 15;

  const words = detailedDescription.split(" ");
  const isLong = words.length > wordLimit;

  const shortText = words.slice(0, wordLimit).join(" ");
  return (
    <div className="glass-project-card group mt-20 flex flex-col font-semibold ">
      <div className="project-tag w-fit">{tag}</div>
      <h3>{title}</h3>
      
      <div>

        <p className="text-sm mb-2">
          {expanded||!isLong ? detailedDescription : `${shortText}...`}
        </p>

           {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs underline opacity-70 hover:opacity-100 mb-4"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )} 
        </div>
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
      
      
      <div className="project-tech mt-auto">
        {tech.map((techName, index) => (
          <span key={index}>{techName}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;