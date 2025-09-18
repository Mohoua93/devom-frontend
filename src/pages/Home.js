import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home-container">
      {/* L'image de fond est gérée par le CSS */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>De l'idée au code : Je donne vie à vos projets numériques.</h1>
          <p>Développeur web full stack, spécialisé dans la création d'expériences utilisateur uniques et performantes.</p>
        </div>
        <Link to="/projets" className="discover-button">
          Découvrir mes projets
        </Link>
      </div>
      
      {/* Bouton WhatsApp géré directement par ce composant */}
      <a 
        href="https://wa.me/0781628093" 
        className="whatsapp-fixed-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src="/images/logo-whatsapp.png" alt="WhatsApp" />
      </a>
    </section>
  );
};

export default Home;