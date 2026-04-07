// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import '../styles/Projects.css'; // Assurez-vous que ce fichier existe

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Le chemin a été ajusté en fonction de notre dernière discussion
    fetch('/projects.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch projects:", error);
        setError("Erreur lors du chargement des projets.");
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="projects-container">Chargement des projets...</div>;
  }

  if (error) {
    return <div className="projects-container error">{error}</div>;
  }

  return (
    <section id="projects" className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={`Capture d'écran de ${project.title}`} 
              className="project-image" 
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-techs">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="link-btn github-btn"
                >
                  GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="link-btn live-btn"
                >
                  Démo Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;