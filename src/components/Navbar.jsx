import { useState } from "react";

export default function Navbar({ onOpenContact }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          IDM{" "}
          <span className="d-none d-md-inline">
            | Imagen &amp; Diagnostico Maxilofacial
          </span>
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          Menu{" "}
          <span>
            <i className="fas fa-bars" />
          </span>
        </button>
        <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`}>
          <ul className="navbar-nav ms-auto" onClick={() => setNavOpen(false)}>
           {/*
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
              >
                Pedir Informes
              </a>
            </li>
            */}
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
