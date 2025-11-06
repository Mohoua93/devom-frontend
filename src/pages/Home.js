import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';


const Home = () => {
// --- WhatsApp config ---
const phone = '33781628093'; // Format international SANS + et SANS le 0 initial
const presetMessage = 'Bonjour 👋 je viens de votre site DEVOM.';
const encoded = encodeURIComponent(presetMessage);
const waMobileUrl = `https://wa.me/${phone}?text=${encoded}`;
const waDesktopUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
const href = /Mobi|Android|iPhone|iPad/i.test(
typeof navigator !== 'undefined' ? navigator.userAgent : ''
)
? waMobileUrl
: waDesktopUrl;


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
