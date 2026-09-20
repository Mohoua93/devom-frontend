import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "../styles/Navbar.css";

const navigationItems = [
  { number: "01", label: "Accueil", to: "/", end: true },
  { number: "02", label: "Projets", to: "/projets" },
  { number: "03", label: "À propos", to: "/a-propos" },
  { number: "04", label: "Contact", to: "/contact" },
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const burgerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`navbar${scrolled ? " is-scrolled" : ""}${open ? " is-menu-open" : ""}`}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="DEVOM — Retour à l’accueil">
          <span className="navbar__brandMain">
            <span className="navbar__brandText">DEVOM</span>
            <span className="navbar__brandDot">.</span>
          </span>
          <span className="navbar__brandCaption">Studio digital</span>
        </Link>

        <nav className="navbar__links" aria-label="Navigation principale">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? " is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__right">
          <span className="navbar__availability">
            <i aria-hidden="true" />
            Disponible
          </span>

          <Link to="/contact" className="navbar__cta">
            Démarrer un projet
            <ArrowUpRight />
          </Link>

          <button
            ref={burgerRef}
            className={`navbar__burger${open ? " is-open" : ""}`}
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`navbar__mobile${open ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <div className="navbar__mobileInner">
          <p className="navbar__mobileLabel">Navigation</p>

          <nav className="navbar__mobileLinks" aria-label="Navigation mobile">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `navbar__mobileLink${isActive ? " is-active" : ""}`
                }
                onClick={closeMenu}
              >
                <span className="navbar__mobileNumber">{item.number}</span>
                <span>{item.label}</span>
                <ArrowUpRight />
              </NavLink>
            ))}
          </nav>

          <div className="navbar__mobileBottom">
            <div className="navbar__mobilePitch">
              <span>Vous avez un projet ?</span>
              <p>Échangeons sur vos idées et donnons-leur une vraie présence en ligne.</p>
            </div>

            <Link
              to="/contact"
              className="navbar__mobileCta"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              Parlons de votre projet
              <ArrowUpRight />
            </Link>

            <div className="navbar__mobileMeta">
              <span className="navbar__mobileStatus">
                <i aria-hidden="true" />
                Disponible pour un projet
              </span>
              <span>Var · France · À distance</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
