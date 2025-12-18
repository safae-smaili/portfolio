import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../../style/projectcard.css'
function ProjectCard({project}){
    

    return(
   
     
      <div className="project-card-horizontal">
      
      {/* LEFT SECTION - Text */}
      <div className="left-section">
        <div className="project-number">Project #{project.id}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="small-description">{project.smallDescription}</p>
        
        <div className="button-group">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="code-btn">View Code</a>
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
          )}
        </div>
      </div>

      {/* RIGHT SECTION - Visual */}
      <div className="right-section">
        <div className="image-container">
          <img src={project.image} alt={project.title} />
          <div className={`status-badge ${project.status}`}>
            {project.status}
          </div>
        </div>
        
        <div className="tech-tags">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

    </div>
  );
}
export default ProjectCard