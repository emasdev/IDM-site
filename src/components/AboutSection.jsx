export default function AboutSection() {
  return (
    <section className="page-section bg-primary text-primary mb-0">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-primary">
          Nosotros
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-tooth" />
          </div>
          <div className="divider-custom-line" />
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-4 offset-md-4 mb-3">
            <h3>¿Quienes sómos?</h3>
            <p className="lead">
              Somos una empresa especializada en diagnostico radiológico e
              imagenología, para el área de la cabeza, el cuello y la cavidad
              oral, que opera conforme a los más altos estándares de calidad,
              utilizando tecnología de vanguardia y brindando una atención
              impecable a Doctores y Pacientes.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-center">Nuestra Misión</h3>
            <p className="lead">
              Apoyar a los profesionales de la salud en la obtención de
              diagnósticos mas precisos, a través de la oferta de servicios
              auxiliares al diagnostico de la mas alta calidad, el tiempo de
              entrega mas rápido y un trato altamente humano hacia el paciente.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-center">Nuestra Visión</h3>
            <p className="lead">
              Ser un importante aliado de los Doctores que nos favorecen
              refiriendo a sus pacientes, funcionando como una extensión de sus
              consultorios ó clínicas, ofreciendo el mejor servicio y un trato
              inigualable a todos sus pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
