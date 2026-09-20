import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import "../styles/Home.animations.css";

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ArrowRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Site vitrine",
    text: "Une présence en ligne claire et crédible, conçue sur mesure pour présenter votre activité et transformer vos visiteurs en contacts.",
    tags: ["Design sur mesure", "Responsive", "SEO"],
  },
  {
    number: "02",
    title: "Landing page",
    text: "Une page ciblée, rapide et persuasive pour valoriser une offre, lancer un service ou soutenir une campagne publicitaire.",
    tags: ["Conversion", "Performance", "Stratégie"],
  },
  {
    number: "03",
    title: "Refonte de site",
    text: "Une nouvelle identité plus actuelle, une navigation simplifiée et une expérience utilisateur repensée sans perdre l’essentiel.",
    tags: ["UX/UI", "Modernisation", "Optimisation"],
  },
  {
    number: "04",
    title: "Développement React",
    text: "Des interfaces web fluides, évolutives et maintenables, développées avec une architecture moderne adaptée à votre projet.",
    tags: ["React", "JavaScript", "API"],
  },
];

const projects = [
  {
    name: "CBM Services & Car",
    category: "Transport privé haut de gamme",
    stack: "React · Express · Multilingue",
    theme: "project-card--midnight",
    monogram: "CBM",
  },
  {
    name: "Les Colis du Cœur",
    category: "Association humanitaire",
    stack: "React · Responsive · Média",
    theme: "project-card--coral",
    monogram: "CDC",
  },
  {
    name: "Maison de l’Horlogerie",
    category: "Service horloger spécialisé",
    stack: "React · SEO · Conversion",
    theme: "project-card--sand",
    monogram: "MH",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Écouter",
    text: "Nous clarifions votre besoin, vos objectifs et les attentes de vos futurs visiteurs.",
  },
  {
    number: "02",
    title: "Concevoir",
    text: "Je construis une direction visuelle cohérente et une expérience simple à parcourir.",
  },
  {
    number: "03",
    title: "Développer",
    text: "Je transforme la maquette en un site rapide, responsive et prêt à évoluer.",
  },
  {
    number: "04",
    title: "Mettre en ligne",
    text: "Après les derniers contrôles, votre site est publié et je reste présent pour la suite.",
  },
];

const Home = () => {
  const phone = "33781628093";
  const presetMessage =
    "Bonjour 👋 je viens de votre site DEVOM. J’aimerais discuter d’un projet web.";
  const encodedMessage = encodeURIComponent(presetMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-main-title">
        <div className="home-hero__orb home-hero__orb--one" aria-hidden="true" />
        <div className="home-hero__orb home-hero__orb--two" aria-hidden="true" />

        <div className="home-hero__inner">
          <div className="home-hero__content">
            <div className="home-eyebrow">
              <span className="home-eyebrow__dot" aria-hidden="true" />
              Studio web indépendant · Var & à distance
            </div>

            <h1 id="home-main-title">
              Des sites web qui marquent les esprits
              <span> et font grandir votre activité.</span>
            </h1>

            <p className="home-hero__description">
              DEVOM imagine et développe des expériences digitales modernes,
              rapides et sur mesure pour les entrepreneurs, indépendants et
              entreprises qui veulent se démarquer.
            </p>

            <div className="home-hero__actions">
              <Link to="/contact" className="home-button home-button--primary">
                Démarrer un projet
                <ArrowUpRight />
              </Link>

              <Link to="/projets" className="home-button home-button--ghost">
                Découvrir mes projets
                <ArrowRight />
              </Link>
            </div>

            <div className="home-hero__trust" aria-label="Expertises principales">
              <p>Une expertise complète</p>
              <ul>
                <li>Design UX/UI</li>
                <li>React</li>
                <li>Responsive</li>
                <li>Performance</li>
              </ul>
            </div>
          </div>

          <div className="home-showcase" aria-hidden="true">
            <div className="home-showcase__browser">
              <div className="home-showcase__toolbar">
                <div className="home-showcase__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="home-showcase__address">devom.fr</div>
                <div className="home-showcase__toolbar-mark" />
              </div>

              <div className="home-showcase__screen">
                <div className="home-showcase__nav">
                  <strong>DEVOM<span>.</span></strong>
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="home-showcase__copy">
                  <span>EXPÉRIENCE DIGITALE</span>
                  <h2>
                    Votre idée.
                    <br />
                    <em>Notre savoir-faire.</em>
                  </h2>
                  <p />
                  <p />
                  <button type="button" tabIndex="-1">
                    Découvrir <ArrowUpRight />
                  </button>
                </div>

                <div className="home-showcase__art">
                  <div className="home-showcase__shape home-showcase__shape--back" />
                  <div className="home-showcase__shape home-showcase__shape--front">
                    <span>D</span>
                  </div>
                  <div className="home-showcase__ring" />
                </div>
              </div>
            </div>

            <div className="home-showcase__floating home-showcase__floating--score">
              <span>Performance</span>
              <strong>98</strong>
              <div><i /><i /><i /><i /><i /></div>
            </div>

            <div className="home-showcase__floating home-showcase__floating--status">
              <span className="home-showcase__status-dot" />
              Disponible pour un projet
            </div>
          </div>
        </div>

        <a className="home-scroll-hint" href="#services" aria-label="Voir les services">
          <span>Découvrir</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <div className="home-tech-strip" aria-label="Technologies et savoir-faire">
        <div className="home-tech-strip__inner">
          <span>React</span>
          <i />
          <span>JavaScript</span>
          <i />
          <span>Design responsive</span>
          <i />
          <span>UX / UI</span>
          <i />
          <span>SEO technique</span>
        </div>
      </div>

      <section className="home-services home-section" id="services" aria-labelledby="services-title">
        <div className="home-section__intro">
          <div>
            <span className="home-section__index">01 — SERVICES</span>
            <h2 id="services-title">
              Votre présence digitale,
              <span> pensée dans les moindres détails.</span>
            </h2>
          </div>
          <p>
            De la première idée à la mise en ligne, chaque choix sert un même
            objectif : créer un site distinctif, agréable à utiliser et utile à
            votre activité.
          </p>
        </div>

        <div className="home-services__grid">
          {services.map((service) => (
            <article className="home-service-card" key={service.number}>
              <div className="home-service-card__top">
                <span>{service.number}</span>
                <ArrowUpRight />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul aria-label={`Compétences pour ${service.title}`}>
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-projects home-section" aria-labelledby="projects-title">
        <div className="home-section__intro home-section__intro--projects">
          <div>
            <span className="home-section__index">02 — PROJETS SÉLECTIONNÉS</span>
            <h2 id="projects-title">
              Des univers uniques,
              <span> une même exigence.</span>
            </h2>
          </div>
          <Link to="/projets" className="home-text-link">
            Voir toutes les réalisations
            <ArrowUpRight />
          </Link>
        </div>

        <div className="home-projects__grid">
          {projects.map((project, index) => (
            <article className={`home-project-card ${project.theme}`} key={project.name}>
              <div className="home-project-card__visual">
                <div className="home-project-card__browser-bar">
                  <div><i /><i /><i /></div>
                  <span>0{index + 1}</span>
                </div>
                <div className="home-project-card__canvas">
                  <span className="home-project-card__monogram">{project.monogram}</span>
                  <div className="home-project-card__line home-project-card__line--short" />
                  <div className="home-project-card__line" />
                  <div className="home-project-card__button" />
                  <div className="home-project-card__decor" />
                </div>
              </div>

              <div className="home-project-card__info">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.stack}</p>
                </div>
                <Link to="/projets" aria-label={`Découvrir le projet ${project.name}`}>
                  <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-method" aria-labelledby="method-title">
        <div className="home-method__inner home-section">
          <div className="home-method__heading">
            <span className="home-section__index">03 — MA MÉTHODE</span>
            <h2 id="method-title">
              Un processus simple.
              <span> Un résultat maîtrisé.</span>
            </h2>
            <p>
              Vous gardez une vision claire de votre projet à chaque étape,
              avec un interlocuteur unique du premier échange à la publication.
            </p>
          </div>

          <div className="home-method__steps">
            {processSteps.map((step) => (
              <article className="home-method__step" key={step.number}>
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

      <section className="home-about home-section" aria-labelledby="about-title">
        <div className="home-about__statement">
          <span className="home-about__quote" aria-hidden="true">“</span>
          <p>
            Je ne crée pas simplement des pages. Je conçois une présence
            digitale qui traduit votre valeur et donne envie de vous choisir.
          </p>
        </div>

        <div className="home-about__content">
          <span className="home-section__index">04 — DEVOM</span>
          <h2 id="about-title">Créatif dans l’approche. Rigoureux dans l’exécution.</h2>
          <p>
            Développeur web freelance, je réunis design, développement et sens
            du détail pour accompagner chaque client avec une approche directe,
            humaine et adaptée à ses objectifs.
          </p>
          <Link to="/about" className="home-text-link">
            En savoir plus sur DEVOM
            <ArrowUpRight />
          </Link>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-title">
        <div className="home-cta__orb" aria-hidden="true" />
        <div className="home-cta__inner">
          <span>UN PROJET EN TÊTE ?</span>
          <h2 id="cta-title">
            Construisons quelque chose
            <em> de remarquable.</em>
          </h2>
          <p>
            Parlez-moi de votre activité, de vos idées et de vos objectifs.
            Je vous répondrai avec une approche claire et adaptée.
          </p>
          <Link to="/contact" className="home-button home-button--light">
            Parlons de votre projet
            <ArrowUpRight />
          </Link>
        </div>
      </section>

      <a
        href={whatsappUrl}
        className="whatsapp-fixed-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter DEVOM sur WhatsApp"
        title="Contacter DEVOM sur WhatsApp"
      >
        <img src="/images/logo-whatsapp.png" alt="" />
      </a>
    </main>
  );
};

export default Home;