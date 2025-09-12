import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="navbar">
        {/* Menu Burger */}
        <div className="menu-burger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Logo texte au centre */}
        <div className="navbar-logo">
          <Link to="/">
            Devom
          </Link>
        </div>
      </header>

      {/* Menu latéral */}
      <nav className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={toggleMenu}>
            <Link to="/">Accueil</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/projets">Projets</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/a-propos">À Propos</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay pour fermer le menu en cliquant en dehors */}
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </>
  );
}

export default Navbar;