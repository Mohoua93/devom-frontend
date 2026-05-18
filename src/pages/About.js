import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__content">
            <p className="about-label">Studio web freelance</p>

            <h1>DEVOM, création de sites web sur-mesure</h1>

            <p>
              J’accompagne les entreprises, indépendants et créateurs de marques
              dans la création de sites web modernes, performants et pensés pour
              convertir.
            </p>
          </div>

          <div className="about-hero__card">
            <span className="about-hero__card-label">DEVOM</span>
            <h2>Des sites web clairs, rapides et professionnels.</h2>
            <p>
              De l’idée jusqu’au lancement, je vous aide à construire une
              présence en ligne solide, élégante et adaptée à votre activité.
            </p>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-section-heading">
          <p className="about-label">Expertise</p>
          <h2>Ce que je peux créer pour vous</h2>
        </div>

        <div className="about-services__grid">
          <article className="about-card">
            <span>01</span>
            <h3>Site vitrine</h3>
            <p>
              Un site professionnel pour présenter votre activité, vos services
              et rassurer vos futurs clients.
            </p>
          </article>

          <article className="about-card">
            <span>02</span>
            <h3>E-commerce</h3>
            <p>
              Une boutique en ligne claire, responsive et pensée pour faciliter
              l’achat sur mobile comme sur ordinateur.
            </p>
          </article>

          <article className="about-card">
            <span>03</span>
            <h3>Shopify</h3>
            <p>
              Création, personnalisation et optimisation de boutiques Shopify
              pour vendre efficacement en ligne.
            </p>
          </article>

          <article className="about-card">
            <span>04</span>
            <h3>Refonte web</h3>
            <p>
              Modernisation d’un site existant pour améliorer son design, sa
              structure, sa vitesse et son image.
            </p>
          </article>
        </div>
      </section>

      <section className="about-method">
        <div className="about-method__content">
          <p className="about-label">Méthode</p>
          <h2>Une approche simple, claire et orientée résultat</h2>
          <p>
            Chaque projet commence par une compréhension précise de votre
            activité, de votre cible et de vos objectifs. L’objectif est de
            créer un site utile, propre, esthétique et facile à faire évoluer.
          </p>
        </div>

        <div className="about-method__steps">
          <div className="about-step">
            <span>01</span>
            <div>
              <h3>Analyse du besoin</h3>
              <p>Objectifs, cible, contenu, pages nécessaires et direction visuelle.</p>
            </div>
          </div>

          <div className="about-step">
            <span>02</span>
            <div>
              <h3>Structure & design</h3>
              <p>Organisation claire des sections et création d’une interface moderne.</p>
            </div>
          </div>

          <div className="about-step">
            <span>03</span>
            <div>
              <h3>Développement</h3>
              <p>Code propre, responsive, maintenable et adapté aux performances.</p>
            </div>
          </div>

          <div className="about-step">
            <span>04</span>
            <div>
              <h3>Lancement</h3>
              <p>Mise en ligne, tests finaux et accompagnement après livraison.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stack">
        <div className="about-section-heading">
          <p className="about-label">Stack technique</p>
          <h2>Des technologies modernes pour des projets solides</h2>
        </div>

        <div className="about-stack__grid">
          <article className="about-stack-card">
            <h3>Front-end</h3>
            <p>HTML5, CSS3, JavaScript, React</p>
          </article>

          <article className="about-stack-card">
            <h3>Back-end & données</h3>
            <p>Node.js, Express, MongoDB</p>
          </article>

          <article className="about-stack-card">
            <h3>Workflow</h3>
            <p>Git, GitHub, déploiement web</p>
          </article>

          <article className="about-stack-card">
            <h3>SEO & performance</h3>
            <p>Structure propre, vitesse, responsive, balises</p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="about-label">Projet web</p>
          <h2>Vous avez un projet en tête ?</h2>
          <p>
            Que ce soit pour créer un nouveau site, lancer une boutique en ligne
            ou moderniser votre présence actuelle, DEVOM peut vous accompagner.
          </p>
        </div>

        <a href="/contact" className="about-cta__button">
          Discutons de votre projet
        </a>
      </section>
    </main>
  );
};

export default About;