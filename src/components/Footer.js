import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Retour à l'accueil">
            DEVOM<span>.</span>
          </Link>

          <p>
            Développeur web freelance, je crée des sites modernes, rapides et
            pensés pour aider les indépendants, entrepreneurs et entreprises à
            développer leur présence en ligne.
          </p>
        </div>

        <div className="footer__column">
          <h3>Navigation</h3>

          <nav className="footer__links" aria-label="Navigation du footer">
            <Link to="/">Accueil</Link>
            <Link to="/projets">Projets</Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer__column">
          <h3>Services</h3>

          <div className="footer__links">
            <span>Site vitrine</span>
            <span>Landing page</span>
            <span>Refonte de site</span>
            <span>Développement React</span>
          </div>
        </div>

        <div className="footer__column">
          <h3>Contact</h3>

          <div className="footer__links">
            <a href="mailto:oualid.mohamed.oualid@gmail.com">
              oualid.mohamed.oualid@gmail.com
            </a>
            <a
              href="https://wa.me/33781628093?text=Bonjour%20%F0%9F%91%8B%20je%20viens%20de%20votre%20site%20DEVOM."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <span>Disponible pour nouveaux projets</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} DEVOM. Tous droits réservés.</p>
        <p>Création de sites web modernes avec React.</p>
      </div>
    </footer>
  );
}

export default Footer;