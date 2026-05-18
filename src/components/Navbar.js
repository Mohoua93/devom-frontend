import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Aller à l'accueil">
          <span className="navbar__brandText">DEVOM</span>
          <span className="navbar__brandDot" />
        </Link>

        <nav className="navbar__links" aria-label="Navigation principale">
          <NavLink to="/" end className="navbar__link">
            Accueil
          </NavLink>

          <NavLink to="/projets" className="navbar__link">
            Projets
          </NavLink>

          <NavLink to="/a-propos" className="navbar__link">
            À propos
          </NavLink>

          <NavLink to="/contact" className="navbar__link">
            Contact
          </NavLink>
        </nav>

        <div className="navbar__right">
          <Link to="/contact" className="navbar__cta">
            Demander un devis
          </Link>

          <button
            className={`navbar__burger ${open ? "is-open" : ""}`}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile ${open ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <nav className="navbar__mobileLinks" aria-label="Navigation mobile">
          <NavLink to="/" end className="navbar__mobileLink">
            Accueil
          </NavLink>

          <NavLink to="/projets" className="navbar__mobileLink">
            Projets
          </NavLink>

          <NavLink to="/a-propos" className="navbar__mobileLink">
            À propos
          </NavLink>

          <NavLink to="/contact" className="navbar__mobileLink">
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="navbar__mobileCta">
          Discuter de mon projet
        </Link>
      </div>
    </header>
  );
}