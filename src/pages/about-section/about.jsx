import Badge from '../../components/badge/badge';
import { technologies, softSkills, interests } from '../../data/badge/badge';
import '../../styles/glass-container/glass-container.css';

const AboutSection = () => {
  return (
    <>
      {/* Technologies Section */}
      <section id="About" className="w-full bg-[#090933] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <h3 className="mt-5 text-white text-center font-bold uppercase text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl col-span-1 sm:col-span-2 lg:col-span-4">
            Technologies
          </h3>

          {technologies.map((tech, index) => (
            <Badge
              key={index}
              icon={tech.icon}
              color={tech.color}
              name={tech.name}
            />
          ))}
        </div>
      </section>

      {/* Soft Skills & Interests Section */}
      <div className="glass-base grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-6">
        <h3 className="text-center text-white uppercase text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl col-span-1 sm:col-span-2 lg:col-span-4">
          Soft Skills
        </h3>
        
        {softSkills.map((skill, index) => (
          <div key={index} className="glass-badge h-40 w-full flex flex-col items-center justify-center p-6 gap-4">
            <iconify-icon icon={skill.icon} style={{ fontSize: '80px', color: skill.color }}></iconify-icon>
            <span className="font-medium text-lg text-center">{skill.name}</span>
          </div>
        ))}

        <h3 className="text-center text-white font-bold uppercase text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl col-span-1 sm:col-span-2 lg:col-span-4">
          Interests
        </h3>
        
        {interests.map((interest, index) => (
          <div key={index} className="glass-badge h-40 w-full flex flex-col items-center justify-center p-6 gap-4">
            <iconify-icon icon={interest.icon} style={{ fontSize: '80px', color: interest.color }}></iconify-icon>
            <span className="font-medium text-lg text-center">{interest.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutSection;