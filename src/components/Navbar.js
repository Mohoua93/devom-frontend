import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);

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
    <header className="nav">
      <div className="nav__bar">
        <Link to="/" className="nav__brand" aria-label="Aller à l'accueil">
          {/* Mets ton logo dans /public/images/logo-devom.png */}
          <img
            className="nav__logo"
            src="/images/logo-devom.png"
            alt="DEVOM"
          />
        </Link>

        <nav className="nav__links" aria-label="Navigation principale">
          <NavLink to="/" end className="nav__link">Accueil</NavLink>
          <NavLink to="/projets" className="nav__link">Projets</NavLink>
          <NavLink to="/a-propos" className="nav__link">À propos</NavLink>
          <NavLink to="/contact" className="nav__link">Contact</NavLink>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__burgerLines" />
        </button>
      </div>

      <div
        className={`nav__overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          id="mobile-menu"
          className="nav__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="nav__panelTop">
            <div className="nav__panelBrand">
              <img className="nav__panelLogo" src="/images/logo-devom.png" alt="DEVOM" />
              <span>Menu</span>
            </div>
            <button className="nav__close" type="button" onClick={() => setOpen(false)} aria-label="Fermer">
              ✕
            </button>
          </div>

          <nav className="nav__panelLinks">
            <NavLink to="/" end className="nav__panelLink">Accueil</NavLink>
            <NavLink to="/projets" className="nav__panelLink">Projets</NavLink>
            <NavLink to="/a-propos" className="nav__panelLink">À propos</NavLink>
            <NavLink to="/contact" className="nav__panelLink">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

