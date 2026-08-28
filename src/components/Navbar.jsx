import { useState } from "react";

export default function Navbar({ onOpenContact, scrolled, navVisible }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      } ${navVisible ? "navbar-visible" : "navbar-hidden"}`}
      id="mainNav"
    >
      <div className="container nav-shell">
        <a className="navbar-brand" href="#page-top">
          <img
            src="/assets/img/logo.png"
            alt="IDM logo"
            className="brand-logo"
          />
          <span className="brand-copy">iDM | Beyond Diagnostics</span>
        </a>

        <button
          className="navbar-toggler text-uppercase font-weight-bold rounded"
          type="button"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-label">Menu</span>
          <span>
            <i className="fas fa-bars" />
          </span>
        </button>

        <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`}>
          <ul className="navbar-nav ms-auto" onClick={() => setNavOpen(false)}>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="tel:+52-55-1543-5396"
              >
                Llamar Ahora
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                Cómo Llegar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
