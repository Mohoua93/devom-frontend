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
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const remaining = useMemo(
    () => MAX_LEN - (formData.message?.length || 0),
    [formData.message]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    // garde message <= 5000 côté UI aussi
    if (name === "message" && value.length > MAX_LEN) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // Honeypot: si rempli, on fait comme si tout allait bien mais on ne poste pas
    if (formData.website) {
      setStatus("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    setStatus("Envoi en cours...");
    setLoading(true);

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000); // 15s timeout

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

      // essaie de lire le JSON, même en cas d'erreur
      let data = {};
      try {
        data = await res.json();
      } catch {
        /* non-JSON: pas grave */
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
        // Optionnel: afficher err.message en dev
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
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot (caché via CSS) */}
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

        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="message">
            Message <small>({remaining} caractères restants)</small>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={MAX_LEN}
            disabled={loading}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </div>
  );
}
