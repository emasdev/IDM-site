export default function HeroSection({ onOpenStudy }) {
  return (
    <header className="hero-header text-secondary text-center">
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/logo.png"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-shell">
        <div className="hero-grid">
          <div className="hero-branding animate__animated animate__fadeInUp">
            <div className="hero-logo-wrap">
              <img
                src="/assets/img/logo.png"
                alt="IDM logo"
                className="hero-logo"
              />
            </div>

            <div className="hero-brand-copy">
              <span className="hero-kicker">iDM | Beyond Diagnostics</span>
              <h1>Imagen &amp; Diagnóstico Maxilofacial</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
