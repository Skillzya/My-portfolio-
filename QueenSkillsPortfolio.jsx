import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    category: "Sites web & Landing pages",
    title: "Skillzya Realty",
    desc: "Landing page immobilière haut de gamme — identité visuelle sombre, fiches biens interactives et formulaire de consultation privée.",
    tags: ["UI Design", "Immobilier", "Dakar"],
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6a8ab37a?w=800&q=80",
    year: "2025",
  },
  {
    id: 2,
    category: "Stratégie digitale",
    title: "Campagne Social Media",
    desc: "Stratégie de contenu multiplateforme pour une marque de mode sénégalaise — croissance organique de 340% en 3 mois.",
    tags: ["Instagram", "LinkedIn", "Contenu"],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    year: "2024",
  },
  {
    id: 3,
    category: "Contenu & Copywriting",
    title: "Identité Éditoriale Jokko",
    desc: "Refonte du discours de marque, charte éditoriale et production de contenus bilingues français-anglais pour Jokko.",
    tags: ["Copywriting", "Branding éditorial", "Bilingue"],
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    year: "2024",
  },
  {
    id: 4,
    category: "Branding & Identité visuelle",
    title: "Identité Visuelle Republiks",
    desc: "Conception de l'identité graphique complète — logo, palette, typographie et déclinaisons digitales pour Republiks.",
    tags: ["Branding", "Direction artistique", "Dakar"],
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    year: "2023",
  },
];

const services = [
  {
    num: "01",
    title: "Sites web & Landing pages",
    desc: "Conception de pages web sur-mesure, élégantes et orientées conversion. Du brief à la mise en ligne, je crée des expériences digitales qui représentent votre marque à sa juste valeur.",
  },
  {
    num: "02",
    title: "Stratégie digitale",
    desc: "Audit, positionnement et plan d'action digital adapté à votre marché. Je traduis vos ambitions en présence en ligne cohérente et mesurable.",
  },
  {
    num: "03",
    title: "Contenu & Copywriting",
    desc: "Textes de marque, scripts, articles et contenus réseaux sociaux en français et en anglais. Des mots qui captivent, engagent et convertissent.",
  },
  {
    num: "04",
    title: "Branding & Identité visuelle",
    desc: "Création ou refonte de votre identité de marque — logo, charte graphique, ton et déclinaisons. Une image forte et mémorable pour vous démarquer.",
  },
];

const testimonials = [
  {
    quote: "Queen Skills a transformé notre présence digitale. Son sens de l'esthétique et sa rigueur sont rares.",
    author: "Directrice Marketing, Jokko",
    initials: "DJ",
  },
  {
    quote: "Un travail de grande qualité, livré dans les délais. Le copywriting a vraiment élevé notre marque.",
    author: "Fondateur, Republiks",
    initials: "FR",
  },
];

export default function QueenSkillsPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", service: "" });
  const [sent, setSent] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  const filters = ["Tous", "Sites web & Landing pages", "Stratégie digitale", "Contenu & Copywriting", "Branding & Identité visuelle"];
  const filtered = activeFilter === "Tous" ? projects : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 120);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      if (cursorDotRef.current) cursorDotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleSend = () => {
    if (formState.name && formState.email && formState.message) setSent(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f7f3ec; cursor: none; }

        :root {
          --cream: #f7f3ec;
          --ink: #0f0d0a;
          --gold: #b8934a;
          --gold-light: #d4af6e;
          --muted: #7a7060;
          --border: rgba(184,147,74,0.18);
        }

        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px;
          border: 1px solid rgba(184,147,74,0.5); border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: transform 0.12s ease;
        }
        .cursor-dot {
          position: fixed; top: 0; left: 0; width: 6px; height: 6px;
          background: var(--gold); border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: transform 0.04s ease;
        }

        .page {
          font-family: 'Jost', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Grain */
        .page::after {
          content: ''; position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.03'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .serif { font-family: 'Playfair Display', Georgia, serif; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 32px 64px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: rgba(247,243,236,0.92);
          backdrop-filter: blur(16px);
          padding: 20px 64px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 500; letter-spacing: 0.04em;
          color: var(--ink);
        }
        .nav-logo span { color: var(--gold); font-style: italic; }
        .nav-links { display: flex; gap: 40px; }
        .nav-links a {
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted); text-decoration: none; transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          border: 1px solid var(--gold); color: var(--gold);
          padding: 10px 26px; background: transparent; cursor: none;
          transition: all 0.3s; font-family: 'Jost', sans-serif;
        }
        .nav-cta:hover { background: var(--gold); color: var(--cream); }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          position: relative; overflow: hidden;
        }
        .hero-left {
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 64px 80px;
          position: relative; z-index: 2;
        }
        .hero-right {
          position: relative; overflow: hidden;
        }
        .hero-right img {
          width: 100%; height: 100%; object-fit: cover;
          filter: saturate(0.6) brightness(0.92);
          transition: transform 8s ease;
        }
        .hero-right:hover img { transform: scale(1.04); }
        .hero-right::before {
          content: ''; position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to right, var(--cream) 0%, transparent 30%);
        }
        .hero-right::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 40%; z-index: 1;
          background: linear-gradient(to top, var(--cream) 0%, transparent 100%);
        }
        .hero-tag {
          font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
          display: flex; align-items: center; gap: 14px;
          opacity: 0; transform: translateY(16px);
          transition: all 0.7s 0.1s ease;
        }
        .hero-tag.loaded { opacity: 1; transform: translateY(0); }
        .hero-tag::before { content: ''; width: 32px; height: 1px; background: var(--gold); }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 5.5vw, 80px);
          font-weight: 400; line-height: 1.05;
          color: var(--ink); margin-bottom: 6px;
          opacity: 0; transform: translateY(24px);
          transition: all 0.8s 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-title.loaded { opacity: 1; transform: translateY(0); }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-subtitle {
          font-size: 13px; letter-spacing: 0.06em; line-height: 1.7;
          color: var(--muted); max-width: 380px; margin: 28px 0 48px;
          opacity: 0; transform: translateY(16px);
          transition: all 0.8s 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-subtitle.loaded { opacity: 1; transform: translateY(0); }
        .hero-actions {
          display: flex; gap: 16px; align-items: center;
          opacity: 0; transform: translateY(16px);
          transition: all 0.8s 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-actions.loaded { opacity: 1; transform: translateY(0); }
        .btn-gold {
          background: var(--gold); color: var(--cream);
          padding: 15px 36px; font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; border: none; cursor: none;
          font-family: 'Jost', sans-serif; font-weight: 500;
          transition: all 0.3s;
        }
        .btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: var(--muted);
          padding: 15px 28px; font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; border: 1px solid rgba(122,112,96,0.3);
          cursor: none; font-family: 'Jost', sans-serif;
          transition: all 0.3s;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .hero-scroll {
          position: absolute; bottom: 48px; right: 64px; z-index: 3;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--muted);
        }
        .scroll-bar {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: barPulse 2s ease-in-out infinite;
        }
        @keyframes barPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }

        /* DIVIDER */
        .divider {
          display: flex; align-items: center; gap: 24px;
          padding: 0 64px; margin: 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .divider-item {
          flex: 1; padding: 40px 0;
          display: flex; gap: 16px; align-items: center;
          border-right: 1px solid var(--border);
        }
        .divider-item:last-child { border-right: none; }
        .divider-num {
          font-family: 'Playfair Display', serif;
          font-size: 40px; font-weight: 400; color: var(--gold); line-height: 1;
        }
        .divider-text { font-size: 11px; letter-spacing: 0.1em; color: var(--muted); line-height: 1.5; text-transform: uppercase; }

        /* SECTION WRAPPER */
        .section { padding: 96px 64px; position: relative; }
        .section-label {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label::before { content: ''; width: 24px; height: 1px; background: var(--gold); }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4vw, 54px); font-weight: 400; line-height: 1.1;
          color: var(--ink); margin-bottom: 64px;
        }
        .section-title em { font-style: italic; color: var(--gold); }

        /* ABOUT */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center;
        }
        .about-img-wrap {
          position: relative;
        }
        .about-img-wrap img {
          width: 100%; aspect-ratio: 3/4; object-fit: cover;
          filter: saturate(0.75);
        }
        .about-img-wrap::after {
          content: ''; position: absolute;
          bottom: -20px; right: -20px; left: 20px; top: 20px;
          border: 1px solid var(--border); z-index: -1;
        }
        .about-badge {
          position: absolute; bottom: 28px; left: -28px;
          background: var(--ink); color: var(--cream);
          padding: 20px 24px; min-width: 160px;
        }
        .about-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px; color: var(--gold); line-height: 1;
        }
        .about-badge-text {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(247,243,236,0.5); margin-top: 6px; line-height: 1.4;
        }
        .about-body p {
          font-size: 15px; line-height: 1.85; color: var(--muted);
          margin-bottom: 20px;
        }
        .about-body p strong { color: var(--ink); font-weight: 500; }
        .about-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
        .about-tag {
          font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
          border: 1px solid var(--border); padding: 8px 16px; color: var(--muted);
        }

        /* PROJECTS */
        .projects-bg { background: var(--ink); }
        .projects-bg .section-label { color: var(--gold-light); }
        .projects-bg .section-label::before { background: var(--gold-light); }
        .projects-bg .section-title { color: var(--cream); }
        .projects-bg .section-title em { color: var(--gold-light); }
        .filters {
          display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 56px; margin-top: -32px;
        }
        .filter-btn {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 8px 18px; border: 1px solid rgba(247,243,236,0.12);
          color: rgba(247,243,236,0.4); background: transparent; cursor: none;
          font-family: 'Jost', sans-serif; transition: all 0.2s;
        }
        .filter-btn:hover { color: var(--gold-light); border-color: rgba(212,175,110,0.3); }
        .filter-btn.active { color: var(--gold-light); border-color: var(--gold-light); }
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; }
        .project-card {
          position: relative; overflow: hidden; cursor: none;
          aspect-ratio: 4/3;
        }
        .project-card img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.4s;
          filter: saturate(0.5) brightness(0.6);
        }
        .project-card:hover img { transform: scale(1.06); filter: saturate(0.7) brightness(0.75); }
        .project-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,13,10,0.95) 0%, rgba(15,13,10,0.1) 60%);
          transition: opacity 0.3s;
        }
        .project-info {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 32px;
          transform: translateY(8px); transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .project-card:hover .project-info { transform: translateY(0); }
        .project-cat {
          font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold-light); margin-bottom: 8px;
        }
        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px; font-weight: 400; color: var(--cream); margin-bottom: 8px;
        }
        .project-desc {
          font-size: 12px; line-height: 1.6; color: rgba(247,243,236,0.55);
          max-width: 340px; margin-bottom: 16px;
          opacity: 0; transform: translateY(8px);
          transition: all 0.4s 0.05s cubic-bezier(0.22,1,0.36,1);
        }
        .project-card:hover .project-desc { opacity: 1; transform: translateY(0); }
        .project-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .project-tag {
          font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase;
          background: rgba(184,147,74,0.15); border: 1px solid rgba(184,147,74,0.25);
          color: var(--gold-light); padding: 4px 10px;
        }

        /* SERVICES */
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .service-item {
          padding: 48px 40px;
          border: 1px solid var(--border);
          margin: -1px 0 0 -1px;
          transition: background 0.3s;
          position: relative;
        }
        .service-item:hover { background: rgba(184,147,74,0.04); }
        .service-num {
          font-family: 'Playfair Display', serif;
          font-size: 13px; color: var(--gold); margin-bottom: 20px;
          font-style: italic;
        }
        .service-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 400; color: var(--ink);
          margin-bottom: 16px; line-height: 1.3;
        }
        .service-desc {
          font-size: 13px; line-height: 1.8; color: var(--muted);
        }
        .service-arrow {
          position: absolute; bottom: 32px; right: 32px;
          font-size: 20px; color: var(--border);
          transition: color 0.2s, transform 0.2s;
        }
        .service-item:hover .service-arrow { color: var(--gold); transform: translate(4px,-4px); }

        /* TESTIMONIALS */
        .testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .testi-card {
          border: 1px solid var(--border); padding: 48px;
          position: relative;
        }
        .testi-quote {
          font-family: 'Playfair Display', serif;
          font-size: 64px; color: var(--gold); line-height: 1;
          position: absolute; top: 24px; left: 40px; opacity: 0.4;
        }
        .testi-text {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 400; font-style: italic;
          line-height: 1.65; color: var(--ink); margin-top: 24px;
          margin-bottom: 32px;
        }
        .testi-author {
          display: flex; align-items: center; gap: 14px;
        }
        .testi-initials {
          width: 40px; height: 40px; background: var(--gold);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 500; color: var(--cream); letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .testi-name { font-size: 11px; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; }

        /* CONTACT */
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px; align-items: start;
        }
        .contact-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 36px; font-weight: 400; line-height: 1.2;
          color: var(--ink); margin-bottom: 24px;
        }
        .contact-info h3 em { color: var(--gold); font-style: italic; }
        .contact-info p {
          font-size: 13px; line-height: 1.8; color: var(--muted); margin-bottom: 40px;
        }
        .contact-details { display: flex; flex-direction: column; gap: 16px; }
        .contact-detail {
          display: flex; align-items: center; gap: 14px;
          font-size: 12px; letter-spacing: 0.08em; color: var(--muted);
        }
        .contact-detail-icon {
          width: 36px; height: 36px; border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-input, .form-select, .form-textarea {
          background: transparent; border: 1px solid var(--border);
          color: var(--ink); padding: 16px 20px; font-size: 13px;
          font-family: 'Jost', sans-serif; outline: none;
          transition: border-color 0.2s; width: 100%;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(122,112,96,0.5); }
        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: var(--gold);
        }
        .form-textarea { resize: none; height: 140px; }
        .form-select { appearance: none; cursor: none; color: rgba(122,112,96,0.5); }
        .form-select.filled { color: var(--ink); }
        .sent-msg {
          text-align: center; padding: 48px 32px;
          border: 1px solid var(--border);
        }
        .sent-msg .icon {
          font-size: 32px; margin-bottom: 16px;
        }
        .sent-msg h4 {
          font-family: 'Playfair Display', serif;
          font-size: 24px; margin-bottom: 12px; color: var(--ink);
        }
        .sent-msg p { font-size: 13px; color: var(--muted); }

        /* FOOTER */
        footer {
          background: var(--ink); padding: 48px 64px;
          display: flex; justify-content: space-between; align-items: center;
          border-top: 1px solid rgba(184,147,74,0.15);
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 18px; color: var(--cream);
        }
        .footer-logo span { color: var(--gold); font-style: italic; }
        .footer-copy { font-size: 11px; color: rgba(247,243,236,0.3); letter-spacing: 0.08em; }
        .footer-socials { display: flex; gap: 20px; }
        .footer-socials a {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(247,243,236,0.4); text-decoration: none; transition: color 0.2s;
        }
        .footer-socials a:hover { color: var(--gold); }

        @media (max-width: 900px) {
          .nav, .hero-left, .section { padding-left: 24px; padding-right: 24px; }
          .nav.scrolled { padding-left: 24px; padding-right: 24px; }
          .hero { grid-template-columns: 1fr; }
          .hero-right { height: 40vh; }
          .hero-left { padding: 120px 24px 60px; }
          .about-grid, .projects-grid, .services-grid, .contact-grid, .testi-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 20px; text-align: center; padding: 36px 24px; }
          .nav-links { display: none; }
          .divider { flex-direction: column; gap: 0; padding: 0 24px; }
          .divider-item { border-right: none; border-bottom: 1px solid var(--border); padding: 28px 0; }
          .hero-scroll { display: none; }
          .about-badge { left: 8px; }
        }
      `}</style>

      <div ref={cursorRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />

      <div className="page">

        {/* NAV */}
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          <div className="nav-logo">Queen <span>Skills</span></div>
          <div className="nav-links">
            <a href="#about">À Propos</a>
            <a href="#projets">Projets</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-cta" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
            Travailler Ensemble
          </button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className={`hero-tag ${loaded ? "loaded" : ""}`}>
              Marketing & Communication Digitale · Dakar
            </div>
            <h1 className={`hero-title serif ${loaded ? "loaded" : ""}`}>
              Yacine<br /><em>Touré</em><br />Queen Skills
            </h1>
            <p className={`hero-subtitle ${loaded ? "loaded" : ""}`}>
              Spécialiste en marketing digital, création de contenu et stratégie de marque. Je transforme vos idées en présences digitales qui captivent, engagent et convertissent.
            </p>
            <div className={`hero-actions ${loaded ? "loaded" : ""}`}>
              <button className="btn-gold" onClick={() => document.getElementById("projets").scrollIntoView({ behavior: "smooth" })}>
                Voir mes projets
              </button>
              <button className="btn-outline" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85" alt="Portrait professionnel" />
          </div>
          <div className="hero-scroll">
            <div className="scroll-bar" />
            Défiler
          </div>
        </section>

        {/* QUICK STATS */}
        <div className="divider">
          {[
            { num: "5+", text: "Années d'expérience" },
            { num: "3", text: "Entreprises · Jokko, Republiks, Am. Auto." },
            { num: "2", text: "Langues · Français & Anglais" },
            { num: "GoMyCode", text: "Formation · Développement Web" },
          ].map((s, i) => (
            <div className="divider-item" key={i}>
              <div className="divider-num serif">{s.num}</div>
              <div className="divider-text">{s.text}</div>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-label">À Propos de Moi</div>
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Queen Skills" />
              <div className="about-badge">
                <div className="about-badge-num serif">Jokko</div>
                <div className="about-badge-text">Chargée Marketing &<br />Communication Digitale</div>
              </div>
            </div>
            <div className="about-body">
              <div className="section-label">Mon histoire</div>
              <h2 className="section-title serif" style={{ marginBottom: 28 }}>
                Créer du sens,<br /><em>à chaque pixel</em>
              </h2>
              <p>
                Je suis <strong>Yacine Touré</strong>, connue sous le nom de <strong>Queen Skills</strong> — Chargée Marketing & Communication Digitale chez <strong>Jokko</strong>, basée à Dakar, Sénégal.
              </p>
              <p>
                Mon parcours mêle <strong>assistanat, télémarketing et communication digitale</strong>, avec des expériences riches chez American de l'Automobile et Republiks. Formée à l'Institut Britannique du Sénégal, je suis parfaitement bilingue français-anglais.
              </p>
              <p>
                En 2024, j'ai renforcé mon profil tech en suivant une <strong>formation développeur web à GoMyCode</strong> — ce qui me permet aujourd'hui de concevoir et de livrer des expériences digitales de bout en bout, du concept au code.
              </p>
              <p>
                Ce qui me distingue : une capacité à combiner <strong>rigueur stratégique</strong> et <strong>sensibilité créative</strong>, enrichie par une intégration naturelle des outils d'intelligence artificielle dans mon travail quotidien.
              </p>
              <div className="about-tags">
                {["Stratégie digitale", "Copywriting FR/EN", "Branding", "Développement Web", "IA & Productivité", "Social Media", "Dakar · Sénégal"].map(t => (
                  <span className="about-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-bg" id="projets">
          <div className="section-label">Projets Sélectionnés</div>
          <h2 className="section-title serif">
            Mon <em>Travail</em>
          </h2>
          <div className="filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </div>
          <div className="projects-grid">
            {filtered.map(p => (
              <div
                key={p.id}
                className="project-card"
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img src={p.img} alt={p.title} />
                <div className="project-overlay" />
                <div className="project-info">
                  <div className="project-cat">{p.category} · {p.year}</div>
                  <div className="project-title serif">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags">
                    {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="section-label">Ce que je propose</div>
          <h2 className="section-title serif">
            Mes <em>Services</em>
          </h2>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-item" key={s.num}>
                <div className="service-num serif">{s.num}</div>
                <h3 className="service-title serif">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" style={{ background: "rgba(184,147,74,0.04)", paddingTop: 64, paddingBottom: 64 }}>
          <div className="section-label">Ils me font confiance</div>
          <h2 className="section-title serif">Témoignages</h2>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-quote serif">"</div>
                <p className="testi-text">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-initials">{t.initials}</div>
                  <div className="testi-name">{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-label">Contact</div>
              <h3>
                Travaillons <em>ensemble</em>
              </h3>
              <p>
                Vous avez un projet, une idée ou simplement envie d'échanger ? Je suis disponible pour des missions freelance, des collaborations et des opportunités à Dakar et à l'international.
              </p>
              <div className="contact-details">
                {[
                  { icon: "✦", text: "Disponible pour missions freelance" },
                  { icon: "✦", text: "Dakar, Sénégal (remote possible)" },
                  { icon: "✦", text: "Français · Anglais" },
                ].map((d, i) => (
                  <div className="contact-detail" key={i}>
                    <div className="contact-detail-icon" style={{ color: "var(--gold)", fontSize: 12 }}>{d.icon}</div>
                    <span>{d.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {sent ? (
              <div className="sent-msg">
                <div className="icon">✦</div>
                <h4 className="serif">Message envoyé !</h4>
                <p>Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <div className="contact-form">
                <div className="form-row">
                  <input
                    className="form-input"
                    placeholder="Votre nom"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                  />
                  <input
                    className="form-input"
                    placeholder="Votre email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <select
                  className={`form-select ${formState.service ? "filled" : ""}`}
                  value={formState.service}
                  onChange={e => setFormState({ ...formState, service: e.target.value })}
                >
                  <option value="">Type de projet</option>
                  <option>Site web & Landing page</option>
                  <option>Stratégie digitale</option>
                  <option>Contenu & Copywriting</option>
                  <option>Branding & Identité visuelle</option>
                  <option>Autre</option>
                </select>
                <textarea
                  className="form-textarea"
                  placeholder="Décrivez votre projet..."
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                />
                <button className="btn-gold" style={{ width: "fit-content" }} onClick={handleSend}>
                  Envoyer le Message
                </button>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">Queen <span>Skills</span></div>
          <div className="footer-copy">© 2025 Yacine Touré · Dakar, Sénégal</div>
          <div className="footer-socials">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
          </div>
        </footer>

      </div>
    </>
  );
}
