import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const phone = "33781628093";
  const presetMessage = "Bonjour 👋 je viens de votre site DEVOM.";
  const encoded = encodeURIComponent(presetMessage);
  const waMobileUrl = `https://wa.me/${phone}?text=${encoded}`;
  const waDesktopUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  const href = /Mobi|Android|iPhone|iPad/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  )
    ? waMobileUrl
    : waDesktopUrl;

  return (
    <section className="home-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>De l'idée au code : Je donne vie à vos projets numériques.</h1>
          <p>
            Développeur web full stack, spécialisé dans la création d'expériences utilisateur uniques et performantes.
          </p>
        </div>

        <Link to="/projets" className="discover-button" aria-label="Découvrir mes projets">
          Découvrir mes projets
        </Link>
      </div>

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
    </section>
  );
};

export default Home;

