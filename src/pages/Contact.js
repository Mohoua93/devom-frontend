
import React, { useMemo, useState } from "react";

import "../styles/Contact.css";
import "../styles/Contact.animations.css";

const runtimeEnv = typeof process !== "undefined" ? process.env : {};

const API_BASE =
  runtimeEnv.NODE_ENV === "production"
    ? "https://devom-backend.onrender.com"
    : "http://localhost:3001";

const MAX_LEN = 5000;

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6.5h16v11H4v-11Zm.5.5 7.5 6 7.5-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const MessageIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 11.5a7.5 7.5 0 0 1-8.2 7.46A8.6 8.6 0 0 1 8 17.8L4 19l1.2-3.7A7.5 7.5 0 1 1 20 11.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const contactSteps = [
  {
    number: "01",
    title: "Vous présentez votre besoin",
    text: "Quelques lignes suffisent pour me parler de votre activité, de votre objectif et du site imaginé.",
  },
  {
    number: "02",
    title: "Nous échangeons sur le projet",
    text: "Je reviens vers vous pour clarifier les priorités, le périmètre, les délais et les prochaines étapes.",
  },
  {
    number: "03",
    title: "Vous recevez une proposition claire",
    text: "Une solution adaptée à votre besoin, accompagnée d’un cadre précis pour avancer sereinement.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const remaining = useMemo(
    () => MAX_LEN - (formData.message?.length || 0),
    [formData.message]
  );

  const whatsappMessage = encodeURIComponent(
    "Bonjour 👋 je viens de votre site DEVOM. J’aimerais discuter d’un projet web."
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "message" && value.length > MAX_LEN) return;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (status.type === "error" || status.type === "success") {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (formData.website) {
      setStatus({
        type: "success",
        message: "Votre message a bien été envoyé.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });

      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message:
          "Merci de renseigner votre nom, votre email et votre message.",
      });

      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Merci de saisir une adresse email valide.",
      });

      return;
    }

    setStatus({
      type: "loading",
      message: "Envoi de votre message...",
    });

    setLoading(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      15000
    );

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        signal: controller.signal,
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data?.message || "Erreur serveur");
      }

      setStatus({
        type: "success",
        message:
          "Merci, votre message a bien été envoyé. Je vous répondrai rapidement.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      if (error.name === "AbortError") {
        setStatus({
          type: "error",
          message:
            "Le délai d’envoi est dépassé. Merci de réessayer dans un instant.",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Une erreur empêche l’envoi du message. Vérifiez votre connexion puis réessayez.",
        });

        if (runtimeEnv.NODE_ENV !== "production") {
          console.error("Contact error:", error);
        }
      }
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section
        className="contact-hero"
        aria-labelledby="contact-main-title"
      >
        <div
          className="contact-hero__orb contact-hero__orb--one"
          aria-hidden="true"
        />

        <div
          className="contact-hero__orb contact-hero__orb--two"
          aria-hidden="true"
        />

        <div className="contact-hero__inner">
          <div className="contact-hero__content">
            <p className="contact-label">
              <span aria-hidden="true" />
              Contact · DEVOM Studio
            </p>

            <h1 id="contact-main-title">
              Donnons forme à
              <span> votre prochain projet.</span>
            </h1>

            <p className="contact-hero__description">
              Un site à créer, une identité à renforcer ou une expérience à
              repenser ? Parlez-moi de votre besoin et construisons une solution
              claire, moderne et réellement utile à votre activité.
            </p>
          </div>

          <aside
            className="contact-hero__panel"
            aria-label="Disponibilité DEVOM"
          >
            <div className="contact-hero__panel-top">
              <span className="contact-availability">
                <i aria-hidden="true" />
                Disponible
              </span>

              <span>DEVOM · 2026</span>
            </div>

            <p>
              Chaque belle collaboration commence par une conversation simple.
            </p>

            <div className="contact-hero__facts">
              <div>
                <span>Réponse</span>
                <strong>Rapide et personnalisée</strong>
              </div>

              <div>
                <span>Échange</span>
                <strong>Clair et sans engagement</strong>
              </div>

              <div>
                <span>Approche</span>
                <strong>Sur mesure</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="contact-section"
        aria-labelledby="contact-section-title"
      >
        <div className="contact-section__inner">
          <div className="contact-info">
            <span className="contact-section-index">
              01 — PREMIER ÉCHANGE
            </span>

            <h2 id="contact-section-title">
              Commençons par
              <span> parler de votre idée.</span>
            </h2>

            <p className="contact-info__intro">
              Décrivez simplement votre projet, même s’il n’est pas encore
              totalement défini. Je vous aiderai à clarifier les priorités et à
              choisir la solution la plus cohérente.
            </p>

            <div className="contact-channels">
              <a href="mailto:oualid.mohamed.oualid@gmail.com">
                <span className="contact-channel__icon">
                  <MailIcon />
                </span>

                <span className="contact-channel__content">
                  <small>Email</small>
                  <strong>oualid.mohamed.oualid@gmail.com</strong>
                </span>

                <ArrowUpRight />
              </a>

              <a
                href={`https://wa.me/33781628093?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-channel__icon">
                  <MessageIcon />
                </span>

                <span className="contact-channel__content">
                  <small>WhatsApp</small>
                  <strong>Démarrer une conversation</strong>
                </span>

                <ArrowUpRight />
              </a>
            </div>

            <div className="contact-steps">
              {contactSteps.map((step) => (
                <article className="contact-step" key={step.number}>
                  <span>{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <header className="contact-form-heading">
              <span className="contact-section-index">
                02 — VOTRE PROJET
              </span>

              <h2>Envoyez-moi votre message.</h2>

              <p>
                Quelques informations suffisent pour lancer la discussion.
              </p>
            </header>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="contact-form"
            >
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

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name">Votre nom</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom et prénom"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="email">Votre email</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vous@entreprise.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="contact-form__group">
                <div className="contact-form__label-row">
                  <label htmlFor="message">
                    Parlez-moi de votre projet
                  </label>

                  <small id="message-counter">
                    {remaining} caractères
                  </small>
                </div>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre activité, vos objectifs, le type de site souhaité, vos délais..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={MAX_LEN}
                  disabled={loading}
                  aria-describedby="message-counter"
                />
              </div>

              <button type="submit" disabled={loading}>
                <span>
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </span>

                <ArrowUpRight />
              </button>

              <p className="contact-form__privacy">
                Vos informations sont uniquement utilisées pour répondre à
                votre demande.
              </p>
            </form>

            {status.message && (
              <p
                className={`form-status form-status--${status.type}`}
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                <span aria-hidden="true" />
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
