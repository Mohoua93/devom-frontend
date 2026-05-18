import React, { useMemo, useState } from "react";
import "../styles/Contact.css";

// CRA: REACT_APP_API_URL ; Vite: VITE_API_URL
const API_BASE =
  process.env.REACT_APP_API_URL ||
  process.env.VITE_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://devom-backend.onrender.com"
    : "http://localhost:3001");

const MAX_LEN = 5000;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const remaining = useMemo(
    () => MAX_LEN - (formData.message?.length || 0),
    [formData.message]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message" && value.length > MAX_LEN) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (formData.website) {
      setStatus("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    setStatus("Envoi en cours...");
    setLoading(true);

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(t);

      let data = {};

      try {
        data = await res.json();
      } catch {
        // Réponse non JSON
      }

      if (!res.ok) {
        throw new Error(data?.message || "Erreur serveur");
      }

      setStatus("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      if (err.name === "AbortError") {
        setStatus("❌ Délai dépassé. Réessaie dans un instant.");
      } else {
        setStatus(
          "❌ Erreur réseau ou serveur. Merci de vérifier ta connexion et de réessayer."
        );

        if (process.env.NODE_ENV !== "production") {
          console.error("Contact error:", err);
        }
      }
    } finally {
      clearTimeout(t);
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <div className="contact-hero__content">
            <p className="contact-label">Contact</p>

            <h1>Parlons de votre projet web</h1>

            <p>
              Vous souhaitez créer un site vitrine, une boutique en ligne ou
              moderniser votre présence sur le web ? Envoyez-moi votre message,
              je vous répondrai rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section__inner">
          <div className="contact-info">
            <p className="contact-label">DEVOM</p>

            <h2>Une demande claire, une réponse rapide.</h2>

            <p>
              Décrivez simplement votre besoin : type de site, objectif,
              activité, délai souhaité ou budget approximatif. Plus votre
              message est précis, plus je pourrai vous orienter efficacement.
            </p>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <span>01</span>
                <div>
                  <h3>Création de site</h3>
                  <p>Site vitrine, landing page, portfolio ou e-commerce.</p>
                </div>
              </div>

              <div className="contact-info__item">
                <span>02</span>
                <div>
                  <h3>Refonte web</h3>
                  <p>Modernisation d’un site existant et amélioration UX.</p>
                </div>
              </div>

              <div className="contact-info__item">
                <span>03</span>
                <div>
                  <h3>Accompagnement</h3>
                  <p>Conseils, mise en ligne, corrections et optimisation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <p className="contact-label">Formulaire</p>
              <h2>Envoyer un message</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="website">Votre site web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  autoComplete="off"
                  tabIndex="-1"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">
                  Message <small>({remaining} caractères restants)</small>
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Expliquez-moi votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={MAX_LEN}
                  disabled={loading}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>

            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}