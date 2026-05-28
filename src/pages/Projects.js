// src/components/Projects.js
import React, { useEffect, useState } from "react";
import "../styles/Projects.animations.css";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau lors du chargement des projets.");
        }

        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur projets :", error);
        setError("Impossible de charger les projets pour le moment.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="projects-page">
        <div className="projects-state">
          <span className="projects-loader" />
          <p>Chargement des projets...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="projects-page">
        <div className="projects-state projects-state--error">
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero__inner">
          <div className="projects-hero__content">
            <p className="projects-label">Portfolio</p>

            <h1 style = {{ fontSize: 'clamp(2.6rem, 6vw, 5.6rem)' }}>Mes réalisations web</h1>

            <p>
              Une sélection de projets conçus pour présenter une activité,
              valoriser une marque et offrir une expérience claire sur tous les
              écrans.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id || project.title}>
              <div className="project-card__imageBox">
                <img
                  src={project.image}
                  alt={`Projet ${project.title}`}
                  className="project-card__image"
                />
              </div>

              <div className="project-card__content">
                <p className="project-card__category">
                  {String(index + 1).padStart(2, "0")} —{" "}
                  {project.category || "Projet web"}
                </p>

                <h2>{project.title}</h2>

                <p className="project-card__description">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (
                  <div className="project-card__techs">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                <div className="project-card__actions">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn"
                    >
                      Voir le projet
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn project-card__btn--ghost"
                    >
                      Code source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;