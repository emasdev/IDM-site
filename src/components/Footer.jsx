export default function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Dirección</h4>
              <p className="lead mb-0">
                Plaza Pabellón del Valle
                <br />
                Av. Universidad 740, Planta Baja
                <br />
                <br />
                Local B09-C, Santa Cruz Atoyac, Benito Juárez, 03100, CDMX
              </p>
            </div>
            <div className="col-lg-4 mb-5">
              <h4 className="text-uppercase mb-4">Horario</h4>
              <p className="lead mb-0">
                Lunes a Viernes: 9:00 - 19:00
                <br />
                Sabado: 9:00 - 14:00
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Telefono</h4>
              <p className="lead mb-0">
                <i className="fab fa-whatsapp mr-2" /> 55 1683 6073
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
