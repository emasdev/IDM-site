export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <h4>iDM | Imagen & Diagnóstico Maxilofacial</h4>
            <p>
              Plaza Pabellón Del Valle
              <br />
              Avenida Universidad 740, planta baja, local B 09-C
              <br />
              Santa Cruz Atoyac Benito Juárez, 03310
              <br />
              Ciudad de México, CDMX.
            </p>
          </div>

          <div className="site-footer-column">
            <h5>Horario de atención</h5>
            <p>
              Lunes a Viernes de 09:00 a 18:00 hrs.
              <br />
              Sábado de 09:00 a 14:00 hrs.
            </p>
          </div>

          <div className="site-footer-column">
            <h5>Contacto</h5>
            <ul className="site-footer-list">
              <li>
                <a href="tel:+5515435396">Teléfono fijo (55) 1543 5396</a>
              </li>
              <li>
                <a href="mailto:sucursal.delvalle@idm-mexico.com">
                  sucursal.delvalle@idm-mexico.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <small>Copyright &copy; IDM 2021</small>
        </div>
      </div>
    </footer>
  );
}
