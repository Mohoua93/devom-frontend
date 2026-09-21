import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.css";

const navigationLinks = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projets" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Site vitrine",
  "Landing page",
  "Refonte de site",
  "Développement React",
];

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

const ArrowUp = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 19V5m-5 5 5-5 5 5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent(
    "Bonjour 👋 je viens de votre site DEVOM. J’aimerais discuter d’un projet web."
  );
  const whatsappUrl = `https://wa.me/33781628093?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__contactBar">
        <p>
          <span className="footer__statusDot" aria-hidden="true" />
          Un projet en tête ?
          <strong> Parlons-en.</strong>
        </p>

        <Link to="/contact" className="footer__contactLink">
          Commencer une conversation
          <ArrowUpRight />
        </Link>
      </div>

      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="DEVOM — Retour à l’accueil">
            DEVOM<span>.</span>
          </Link>

          <p>
            Studio web indépendant spécialisé dans la création d’expériences
            digitales modernes, rapides et pensées pour développer votre activité.
          </p>

          <div className="footer__availability">
            <span className="footer__statusDot" aria-hidden="true" />
            Disponible pour de nouveaux projets
          </div>
        </div>

        <div className="footer__column">
          <h3>
            <span>01</span>
            Navigation
          </h3>

          <nav className="footer__links" aria-label="Navigation du pied de page">
            {navigationLinks.map((item) => (
              <Link to={item.to} key={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__column">
          <h3>
            <span>02</span>
            Services
          </h3>

          <ul className="footer__services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer__column footer__column--contact">
          <h3>
            <span>03</span>
            Me contacter
          </h3>

          <div className="footer__contactLinks">
            <a href="mailto:oualid.mohamed.oualid@gmail.com">
              <span>E-mail</span>
              <strong>oualid.mohamed.oualid@gmail.com</strong>
              <ArrowUpRight />
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <span>Message direct</span>
              <strong>WhatsApp</strong>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        DEVOM<span>.</span>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} DEVOM. Tous droits réservés.</p>

        <p className="footer__location">Var · France · À distance</p>

        <button type="button" className="footer__backToTop" onClick={scrollToTop}>
          Retour en haut
          <ArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
