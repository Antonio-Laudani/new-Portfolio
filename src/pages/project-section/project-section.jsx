import ProjectCard from '../../components/project-card/project-card';
import { projects } from '../../data/projects/projects';
import '../../styles/glass-container/glass-container.css';

const ProjectSection = () => {
  return (
    <div id="work" className="projects-section glass-base mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6 style={{ contentVisibility: 'auto' }}">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          tag={project.tag}
          title={project.title}
          description={project.description}
          detailedDescription={project.detailedDescription}
          tech={project.tech}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectSection;