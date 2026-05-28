import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.animations.css";
import "../styles/Home.css";

const Home = () => {
  const phone = "33781628093";
  const presetMessage = "Bonjour 👋 je viens de votre site DEVOM. J'aimerais discuter d'un projet web.";
  const encoded = encodeURIComponent(presetMessage);

  const waMobileUrl = `https://wa.me/${phone}?text=${encoded}`;
  const waDesktopUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  const href = /Mobi|Android|iPhone|iPad/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  )
    ? waMobileUrl
    : waDesktopUrl;

  const services = [
    {
      title: "Site vitrine",
      text: "Création de sites modernes pour indépendants, artisans, entreprises et marques.",
    },
    {
      title: "Landing page",
      text: "Pages optimisées pour convertir vos visiteurs en prospects ou clients.",
    },
    {
      title: "Refonte de site",
      text: "Modernisation de votre site existant avec un design plus professionnel.",
    },
    {
      title: "Développement React",
      text: "Interfaces rapides, propres et responsives avec React et JavaScript.",
    },
  ];

  const strengths = [
    "Design responsive adapté mobile, tablette et desktop",
    "Code propre, structuré et maintenable",
    "Accompagnement clair de l’idée jusqu’à la mise en ligne",
    "Sites pensés pour inspirer confiance et générer des contacts",
  ];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__label">Développeur web freelance</p>

          <h1>
            Je crée des sites modernes, rapides et pensés pour développer votre
            activité.
          </h1>

          <p className="home-hero__description">
            DEVOM accompagne les indépendants, entrepreneurs et petites
            entreprises dans la création de sites vitrines, landing pages et
            interfaces web professionnelles avec React.
          </p>

          <div className="home-hero__actions">
            <Link to="/contact" className="home-btn home-btn--primary">
              Discuter de mon projet
            </Link>

            <Link to="/projets" className="home-btn home-btn--secondary">
              Voir mes réalisations
            </Link>
          </div>

          <div className="home-hero__stats">
            <div>
              <strong>100%</strong>
              <span>responsive</span>
            </div>
            <div>
              <strong>React</strong>
              <span>JavaScript moderne</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>bases optimisées</span>
            </div>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <div className="home-card home-card--main">
            <span className="home-card__badge">DEVOM Studio</span>
            <h2>Site web professionnel</h2>
            <p>
              Design moderne, navigation fluide, formulaire de contact et mise
              en ligne.
            </p>
          </div>

          <div className="home-card home-card--small">
            <span>Performance</span>
            <strong>Rapide & clair</strong>
          </div>

          <div className="home-card home-card--small home-card--dark">
            <span>Objectif</span>
            <strong>Plus de contacts</strong>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <p className="home-section__label">Mes services</p>
          <h2>Des solutions web adaptées à votre activité</h2>
          <p>
            Je vous aide à construire une présence en ligne sérieuse, claire et
            efficace.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">0{services.indexOf(service) + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--split">
        <div>
          <p className="home-section__label">Pourquoi DEVOM ?</p>
          <h2>Un site beau, mais surtout utile pour votre business.</h2>
        </div>

        <div className="strength-list">
          {strengths.map((strength) => (
            <div className="strength-item" key={strength}>
              <span>✓</span>
              <p>{strength}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <p className="home-section__label">Votre projet commence ici</p>
          <h2>Besoin d’un site web professionnel ?</h2>
          <p>
            Expliquez-moi votre besoin et je vous répondrai avec une approche
            claire, simple et adaptée à votre projet.
          </p>
        </div>

        <Link to="/contact" className="home-btn home-btn--primary">
          Me contacter
        </Link>
      </section>

      <a
        href={href}
        className="whatsapp-fixed-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        title="Contacter sur WhatsApp"
      >
        <img src="/images/logo-whatsapp.png" alt="WhatsApp" />
      </a>
    </main>
  );
};

export default Home;