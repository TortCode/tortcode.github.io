import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

function Projects() {
  return (
    <div style={{
      display: 'flex',
      flexBasis: '1000px',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      alignContent: 'flex-start',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      {projectData.map(project => (
        <ProjectCard key={project.repo} {...project} />
      ))}
    </div>
  );
}

export default Projects;