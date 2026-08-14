export default function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">
                iDM | Imagen & Diagnóstico Maxilofacial
              </h4>
              <p className="lead mb-0">
                Plaza Pabellón Del Valle
                <br />
                Avenida Universidad 740, planta baja, local B 09-C
                <br />
                Santa Cruz Atoyac Benito Juárez, 03310
                <br />
                Ciudad de México, CDMX.
              </p>
            </div>
            <div className="col-lg-4 mb-5">
              <h4 className="text-uppercase mb-4">Horario de atención</h4>
              <p className="lead mb-0">
                Lunes a Viernes de 09:00 a 18:00 hrs.
                <br />
                Sábado de 09:00 a 14:00 hrs.
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Contacto</h4>
              <p className="lead mb-0">
                Teléfono fijo (55) 1543 5396
                <br />
                sucursal.delvalle@idm-mexico.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; IDM 2021</small>
        </div>
      </div>
    </>
  );
}
