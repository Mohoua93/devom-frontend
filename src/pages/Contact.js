import React, { useState } from 'react';
import '../styles/Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Gère l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    setLoading(true);

    try {
      const response = await fetch(
        "https://devom-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        // Réinitialise le formulaire après un envoi réussi
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`❌ Erreur : ${errorData.message || 'Une erreur est survenue lors de l\'envoi.'}`);
      }
    } catch (error) {
      console.error("Erreur réseau ou serveur :", error);
      setStatus("❌ Erreur réseau ou serveur. Veuillez vérifier votre connexion.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
}

export default Contact;