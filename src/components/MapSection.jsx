export default function MapSection() {
  return (
    <section className="page-section location-section mb-0" id="about">
      <div className="container">
        <div className="location-header">
          <h2 className="page-section-heading text-center text-uppercase">
            Ubicación
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-tooth" />
            </div>
            <div className="divider-custom-line" />
          </div>
        </div>

        <div className="location-grid">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.906358985034!2d-99.16239410000001!3d19.37320689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffbcb6abaedf%3A0x4c266c5c222a107c!2sAv.%20Universidad%20740%2C%20Letran%20Valle%2C%20Benito%20Ju%C3%A1rez%2C%2003650%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1768505351167!5m2!1sen!2smx"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa IDM"
            />
          </div>

          <div className="location-panel">
            <div className="location-action">
              <div className="location-icon">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="location-copy">
                <span>Llámanos</span>
                <a href="tel:+52-55-1683-6073">Tel: 55 1683 6073</a>
              </div>
            </div>

            <div className="location-action">
              <div className="location-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="location-copy">
                <span>Dirección</span>
                <p>Av. Universidad 740, Letrán Valle, Benito Juárez, CDMX</p>
              </div>
            </div>

            <div className="location-actions-row">
              <a
                className="location-button"
                href="https://www.google.com/maps/dir//Av.+Universidad+740+Letran+Valle+Benito+Ju%C3%A1rez+03650+Ciudad+de+M%C3%A9xico,+CDMX/@19.3732069,-99.1623941,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x85d1ffbcb6abaedf:0x4c266c5c222a107c!2m2!1d-99.1623941!2d19.3732069"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-location-dot" />
                Cómo llegar
              </a>

              <a className="location-button primary" href="tel:+525515435396">
                <i className="fas fa-phone-volume" />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
