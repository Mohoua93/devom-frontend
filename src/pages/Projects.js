// src/components/Projects.js

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Projects.css";
import "../styles/Projects.animations.css";

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M14 5l-4 14"
      stroke="currentColor"
      strokeWidth="1.7"
    />
  </svg>
);

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Tous");

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const response = await fetch("/projects.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            "Erreur réseau lors du chargement des projets."
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error(
            "Le fichier projects.json doit contenir une liste de projets."
          );
        }

        setProjects(data);
        setError(null);
      } catch (requestError) {
        if (requestError.name === "AbortError") return;

        console.error("Erreur projets :", requestError);
        setError(
          "Impossible de charger les projets pour le moment."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => controller.abort();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = projects
      .map((project) => project.category || "Projet web")
      .filter(
        (category, index, values) =>
          values.indexOf(category) === index
      );

    return ["Tous", ...uniqueCategories];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;

    return projects.filter(
      (project) =>
        (project.category || "Projet web") === activeFilter
    );
  }, [activeFilter, projects]);

  if (loading) {
    return (
      <main className="projects-page">
        <section
          className="projects-state"
          aria-live="polite"
          aria-busy="true"
        >
          <span
            className="projects-loader"
            aria-hidden="true"
          />

          <div>
            <strong>DEVOM</strong>
            <p>Chargement des projets...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="projects-page">
        <section
          className="projects-state projects-state--error"
          role="alert"
        >
          <span className="projects-state__code">
            Erreur
          </span>

          <h1>Les projets ne sont pas disponibles.</h1>

          <p>{error}</p>

          <button
            type="button"
            onClick={() => window.location.reload()}
          >
            Réessayer
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="projects-page">
      <section
        className="projects-hero"
        aria-labelledby="projects-title"
      >
        <div
          className="projects-hero__orb projects-hero__orb--one"
          aria-hidden="true"
        />

        <div
          className="projects-hero__orb projects-hero__orb--two"
          aria-hidden="true"
        />

        <div className="projects-hero__inner">
          <div className="projects-hero__content">
            <p className="projects-label">
              <span aria-hidden="true" />
              Portfolio · Sélection 2026
            </p>

            <h1 id="projects-title">
              Des projets qui donnent
              <span> vie aux idées.</span>
            </h1>

            <p className="projects-hero__description">
              Des interfaces conçues pour affirmer une
              identité, simplifier l’expérience et transformer
              une présence en ligne en véritable outil de
              développement.
            </p>
          </div>

          <aside
            className="projects-hero__summary"
            aria-label="Résumé du portfolio"
          >
            <div className="projects-hero__count">
              <strong>
                {String(projects.length).padStart(2, "0")}
              </strong>

              <span>projets présentés</span>
            </div>

            <div className="projects-hero__facts">
              <div>
                <span>Approche</span>
                <strong>Sur mesure</strong>
              </div>

              <div>
                <span>Technologie</span>
                <strong>React</strong>
              </div>

              <div>
                <span>Expérience</span>
                <strong>100% responsive</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="projects-gallery"
        aria-labelledby="gallery-title"
      >
        <div className="projects-gallery__inner">
          <header className="projects-gallery__header">
            <div>
              <span className="projects-section-index">
                01 — RÉALISATIONS
              </span>

              <h2 id="gallery-title">
                Tous les projets
              </h2>
            </div>

            <p>
              {visibleProjects.length} projet
              {visibleProjects.length > 1 ? "s" : ""}
            </p>
          </header>

          {categories.length > 2 && (
            <div
              className="projects-filters"
              aria-label="Filtrer les projets"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeFilter === category
                      ? "is-active"
                      : ""
                  }
                  aria-pressed={
                    activeFilter === category
                  }
                  onClick={() =>
                    setActiveFilter(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="projects-grid">
            {visibleProjects.map((project, index) => {
              const projectNumber = String(
                index + 1
              ).padStart(2, "0");

              const category =
                project.category || "Projet web";

              return (
                <article
                  className={`project-card project-card--accent-${
                    (index % 4) + 1
                  }`}
                  key={
                    project.id ||
                    project.title ||
                    projectNumber
                  }
                >
                  <div className="project-card__imageBox">
                    <div className="project-card__imageMeta">
                      <span>{projectNumber}</span>
                      <span>{category}</span>
                    </div>

                    <img
                      src={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                      className="project-card__image"
                      loading={
                        index < 4 ? "eager" : "lazy"
                      }
                    />

                    <span
                      className="project-card__corner"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="project-card__content">
                    <h3>{project.title}</h3>

                    <p className="project-card__description">
                      {project.description}
                    </p>

                    {project.technologies?.length > 0 && (
                      <ul
                        className="project-card__techs"
                        aria-label={`Technologies utilisées pour ${project.title}`}
                      >
                        {project.technologies.map(
                          (tech) => (
                            <li key={tech}>{tech}</li>
                          )
                        )}
                      </ul>
                    )}

                    {(project.liveLink ||
                      project.githubLink) && (
                      <div className="project-card__actions">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__btn"
                            aria-label={`Voir le projet ${project.title}`}
                          >
                            Voir le projet
                            <ArrowUpRight />
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__btn project-card__btn--ghost"
                            aria-label={`Voir le code source de ${project.title}`}
                          >
                            <CodeIcon />
                            Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProjects.length === 0 && (
            <div className="projects-empty">
              <p>
                Aucun projet ne correspond à cette
                catégorie.
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter("Tous")}
              >
                Afficher tous les projets
              </button>
            </div>
          )}

          <div className="projects-cta">
            <div>
              <span>
                VOTRE PROJET POURRAIT ÊTRE LE PROCHAIN
              </span>

              <h2>
                Une idée à transformer en expérience
                digitale ?
              </h2>
            </div>

            <Link
              to="/contact"
              className="projects-cta__link"
            >
              Parlons de votre projet
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;