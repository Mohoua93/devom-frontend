import React from "react";
import { Link } from "react-router-dom";

import "../styles/About.css";
import "../styles/About.animations.css";

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

const services = [
  {
    number: "01",
    title: "Site vitrine",
    text: "Une présence professionnelle, claire et crédible pour présenter votre activité et générer de nouveaux contacts.",
    tags: ["Sur mesure", "Responsive", "SEO"],
  },
  {
    number: "02",
    title: "E-commerce",
    text: "Une boutique intuitive et rassurante, conçue pour faciliter la découverte des produits et le passage à l’achat.",
    tags: ["Parcours client", "Mobile", "Conversion"],
  },
  {
    number: "03",
    title: "Shopify",
    text: "Création, personnalisation et optimisation de boutiques Shopify adaptées à votre identité et à vos objectifs.",
    tags: ["Boutique", "Personnalisation", "Vente"],
  },
  {
    number: "04",
    title: "Refonte web",
    text: "Une nouvelle direction visuelle et technique pour rendre votre site plus moderne, rapide et convaincant.",
    tags: ["UX/UI", "Performance", "Modernisation"],
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Nous clarifions votre activité, votre cible, vos objectifs et les besoins réels de vos visiteurs.",
  },
  {
    number: "02",
    title: "Structurer",
    text: "J’organise les contenus et les parcours pour rendre chaque information simple à trouver et à comprendre.",
  },
  {
    number: "03",
    title: "Créer",
    text: "Je conçois puis développe une interface moderne, cohérente avec votre identité et responsive.",
  },
  {
    number: "04",
    title: "Finaliser",
    text: "Après les tests et les derniers ajustements, le site est mis en ligne et prêt à évoluer.",
  },
];

const stackGroups = [
  {
    number: "01",
    title: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "Back-end",
    items: ["Node.js", "Express", "MongoDB", "API"],
  },
  {
    number: "03",
    title: "Outils",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
  {
    number: "04",
    title: "Déploiement",
    items: ["Vercel", "Render", "DNS", "Maintenance"],
  },
];

const About = () => {
  return (
    <main className="about-page">
      <section
        className="about-hero"
        aria-labelledby="about-main-title"
      >
        <div
          className="about-hero__orb about-hero__orb--one"
          aria-hidden="true"
        />

        <div
          className="about-hero__orb about-hero__orb--two"
          aria-hidden="true"
        />

        <div className="about-hero__inner">
          <div className="about-hero__content">
            <p className="about-eyebrow">
              <span aria-hidden="true" />
              Studio web indépendant · DEVOM
            </p>

            <h1 id="about-main-title">
              Créer avec du sens.
              <span>Développer avec exigence.</span>
            </h1>

            <p className="about-hero__description">
              J’accompagne les entrepreneurs, indépendants et
              entreprises dans la création de sites web qui
              traduisent leur valeur, inspirent confiance et
              soutiennent réellement leur activité.
            </p>

            <div className="about-hero__actions">
              <Link
                to="/contact"
                className="about-button about-button--primary"
              >
                Parler de votre projet
                <ArrowUpRight />
              </Link>

              <Link
                to="/projets"
                className="about-button about-button--ghost"
              >
                Voir mes réalisations
                <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div
            className="about-hero__visual"
            aria-hidden="true"
          >
            <div className="about-studio-card">
              <div className="about-studio-card__top">
                <strong>
                  DEVOM<span>.</span>
                </strong>

                <span>STUDIO DIGITAL</span>
              </div>

              <div className="about-studio-card__center">
                <span>DESIGN · CODE · IMPACT</span>

                <h2>
                  Votre projet mérite une identité qui lui
                  ressemble.
                </h2>

                <div className="about-studio-card__lines">
                  <i />
                  <i />
                </div>
              </div>

              <div className="about-studio-card__bottom">
                <span>React</span>
                <span>UX / UI</span>
                <span>Responsive</span>
              </div>
            </div>

            <div className="about-floating-card about-floating-card--first">
              <span>01</span>
              <strong>Sur mesure</strong>
            </div>

            <div className="about-floating-card about-floating-card--second">
              <span className="about-floating-card__dot" />
              Disponible pour un projet
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-intro about-section"
        aria-labelledby="about-intro-title"
      >
        <div className="about-intro__heading">
          <span className="about-section-index">
            01 — À PROPOS
          </span>

          <h2 id="about-intro-title">
            Un partenaire impliqué,
            <span>
              {" "}
              du premier échange à la mise en ligne.
            </span>
          </h2>
        </div>

        <div className="about-intro__content">
          <p>
            DEVOM est un studio web indépendant qui réunit
            réflexion, design et développement. Chaque projet
            est abordé avec la même attention : comprendre ce
            qui vous rend unique avant de choisir une solution.
          </p>

          <p>
            Vous échangez avec un interlocuteur unique,
            disponible et transparent, capable de vous
            expliquer simplement les choix réalisés et de vous
            accompagner à chaque étape.
          </p>

          <div className="about-intro__highlights">
            <div>
              <strong>100%</strong>
              <span>sur mesure</span>
            </div>

            <div>
              <strong>1</strong>
              <span>interlocuteur unique</span>
            </div>

            <div>
              <strong>360°</strong>
              <span>du design au lancement</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-services about-section"
        aria-labelledby="about-services-title"
      >
        <header className="about-section-heading">
          <div>
            <span className="about-section-index">
              02 — EXPERTISE
            </span>

            <h2 id="about-services-title">
              Des solutions adaptées
              <span> à votre activité.</span>
            </h2>
          </div>

          <p>
            Chaque format répond à un objectif précis, sans
            modèle générique ni fonctionnalités inutiles.
          </p>
        </header>

        <div className="about-services__grid">
          {services.map((service) => (
            <article
              className="about-service-card"
              key={service.number}
            >
              <div className="about-service-card__top">
                <span>{service.number}</span>
                <ArrowUpRight />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <ul
                aria-label={`Compétences pour ${service.title}`}
              >
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-method"
        aria-labelledby="about-method-title"
      >
        <div className="about-method__inner about-section">
          <div className="about-method__content">
            <span className="about-section-index">
              03 — MÉTHODE
            </span>

            <h2 id="about-method-title">
              Une méthode claire pour avancer
              <span> sans zones d’ombre.</span>
            </h2>

            <p>
              Un projet bien cadré évite les mauvaises
              surprises. Vous savez où nous allons, pourquoi
              nous faisons chaque choix et quelle est la
              prochaine étape.
            </p>
          </div>

          <div className="about-method__steps">
            {methodSteps.map((step) => (
              <article
                className="about-method__step"
                key={step.number}
              >
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-stack about-section"
        aria-labelledby="about-stack-title"
      >
        <header className="about-section-heading">
          <div>
            <span className="about-section-index">
              04 — TECHNOLOGIES
            </span>

            <h2 id="about-stack-title">
              Des outils modernes,
              <span> choisis avec cohérence.</span>
            </h2>
          </div>

          <p>
            La technologie reste au service du projet :
            rapidité, stabilité, simplicité de maintenance et
            capacité à évoluer.
          </p>
        </header>

        <div className="about-stack__grid">
          {stackGroups.map((group) => (
            <article
              className="about-stack-card"
              key={group.number}
            >
              <span>{group.number}</span>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-values about-section"
        aria-labelledby="about-values-title"
      >
        <div className="about-values__statement">
          <span aria-hidden="true">“</span>

          <h2 id="about-values-title">
            Un beau site attire l’attention. Une bonne
            expérience donne envie de rester, de comprendre et
            de passer à l’action.
          </h2>
        </div>

        <div className="about-values__list">
          <div>
            <span>01</span>
            <strong>Clarté</strong>
            <p>
              Des choix expliqués et une communication directe.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Exigence</strong>
            <p>
              Une attention constante portée au fond comme aux
              détails.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Utilité</strong>
            <p>
              Un site pensé pour servir vos objectifs et vos
              visiteurs.
            </p>
          </div>
        </div>
      </section>

      <section
        className="about-cta"
        aria-labelledby="about-cta-title"
      >
        <div
          className="about-cta__decor"
          aria-hidden="true"
        />

        <div className="about-cta__inner">
          <span>UN PROJET À CONSTRUIRE ?</span>

          <h2 id="about-cta-title">
            Donnons à votre idée
            <em> une présence remarquable.</em>
          </h2>

          <p>
            Expliquez-moi votre besoin. Je vous répondrai avec
            une approche claire, honnête et adaptée à votre
            projet.
          </p>

          <Link
            to="/contact"
            className="about-button about-button--light"
          >
            Discutons de votre projet
            <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;