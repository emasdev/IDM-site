export default function CtaSection({ onOpenStudy }) {
  return (
    <section className="cta-section">
      <div className="cta-band">
        <div className="container cta-band-inner">
          <div className="cta-info">
            <div className="cta-icon-box">
              <i className="fas fa-hospital-user" />
            </div>
            <div className="cta-copy">
              <span className="cta-label">iDM | Beyond Diagnostics</span>
              <p>
                En iDM, ayudamos a los profesionales de la salud bucal a tomar
                mejores decisiones clínicas y contribuimos a que más personas
                recuperen su salud.
              </p>
            </div>
          </div>

          <button type="button" className="cta-button" onClick={onOpenStudy}>
            <span className="cta-button-icon">
              <i className="fas fa-download" />
            </span>
            Orden de estudio electrónica
          </button>
        </div>
      </div>
    </section>
  );
}
