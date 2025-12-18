import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects.js';
import '../../style/projectSection.css'

const ProjectSection = () => {
 
return (
     <section id="projects" className="projects-section">
       <div className="container">
         <h2 className="section-title">My Projects</h2>
        
         <div className="projects-list">
           {projects.map(project => (
             <ProjectCard 
                key={project.id} 
               project={project}
             />
           ))}
         </div> 

       </div>
       
     </section>
  );
//  const testProjects = [
//     {
//       id: 1,
//       title: "Test Project",
//       smallDescription: "Test description",
//       tech: ["Python", "React"],
//       codeUrl: "#",
//       status: "completed",
//       image: ""
//     },
//      {
//       id: 2,
//       title: "Test Project",
//       smallDescription: "Test description",
//       tech: ["Python", "React"],
//       codeUrl: "#",
//       status: "completed",
//       image: ""
//     }
//   ];
  
//   return (
//     <section id="projects">
//       <h1>TEST PROJECTS</h1>
//       <div>
//         {testProjects.map(project => (
//         <ProjectCard key={project.id}  project={project}/>

//         ))}
//       </div>
//     </section>
//   );
     
          

}

export default ProjectSection