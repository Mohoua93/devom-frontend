// src/pages/About.jsx (ou src/components/About.jsx selon ton arbo)
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <p className="about-tagline">Studio web freelance</p>
        <h1 className="about-title">DEVOM, création de sites web sur-mesure</h1>
        <p className="about-intro">
          DEVOM est une jeune société spécialisée dans la création de sites web
          modernes, performants et pensés pour votre business. J&apos;accompagne
          les entreprises, indépendants et créateurs de marques dans leur
          présence en ligne, de l&apos;idée jusqu&apos;au lancement.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <h2>Ce que je propose</h2>
          <ul>
            <li>Sites vitrines sur-mesure pour présenter votre activité</li>
            <li>Sites e-commerce personnalisés</li>
            <li>Boutiques en ligne via Shopify</li>
            <li>Refonte et modernisation de sites existants</li>
            <li>Optimisation SEO pour gagner en visibilité</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Ma façon de travailler</h2>
          <ul>
            <li>Écoute de vos besoins et de votre cible</li>
            <li>Conseils sur la structure, le contenu et l&apos;UX</li>
            <li>Développement propre, maintenable et évolutif</li>
            <li>Accompagnement au déploiement et aux mises à jour</li>
          </ul>
        </article>
      </section>

      <section className="about-stack">
        <h2>Compétences & stack technique</h2>
        <div className="about-stack-grid">
          <div className="about-stack-block">
            <h3>Front-end</h3>
            <p>
              HTML5, CSS3, JavaScript, React. Je développe des interfaces
              responsives, rapides et adaptées au mobile.
            </p>
          </div>
          <div className="about-stack-block">
            <h3>Back-end & données</h3>
            <p>
              Développement full-stack et gestion des données avec MongoDB pour
              des applications flexibles et performantes.
            </p>
          </div>
          <div className="about-stack-block">
            <h3>Versionning & workflow</h3>
            <p>
              Utilisation de Git et GitHub pour suivre les évolutions, 
              collaborer proprement et sécuriser le code.
            </p>
          </div>
          <div className="about-stack-block">
            <h3>SEO & performance</h3>
            <p>
              Optimisation technique (structure, temps de chargement, balises)
              pour améliorer le référencement naturel.
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Un projet en tête&nbsp;?</h2>
        <p>
          Que ce soit pour créer un nouveau site, lancer une boutique en ligne
          ou redonner vie à un site existant, DEVOM peut vous accompagner.
        </p>
        <a href="/contact" className="about-cta-button">
          Discutons de votre projet
        </a>
      </section>
    </main>
  );
};

export default About;
