const VALUES = [
  {
    icon: "fas fa-user-md",
    title: "Diagnóstico confiable",
    text: "Radiología e imagen para cabeza, cuello y cavidad oral con estándares de calidad y precisión clínica.",
  },
  {
    icon: "fas fa-radiation",
    title: "Tecnología de vanguardia",
    text: "Integramos equipos modernos y procesos eficientes para obtener estudios con máxima información útil.",
  },
  {
    icon: "fas fa-heartbeat",
    title: "Atención humana",
    text: "Cada estudio se realiza pensando en la persona que espera recuperar su salud y en el especialista que requiere claridad.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Relación de confianza",
    text: "Creamos alianzas sólidas con profesionales y pacientes, con ética, responsabilidad y servicio constante.",
  },
];

export default function AboutSection() {
  return (
    <section className="page-section about-section mb-0">
      <div className="container">
        <div className="about-header">
          <h2 className="page-section-heading text-center text-uppercase">
            Nosotros
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-tooth" />
            </div>
            <div className="divider-custom-line" />
          </div>
        </div>

        <div className="about-intro-card">
          <div className="about-intro-copy">
            <span className="about-kicker">iDM | Beyond Diagnostics</span>
            <h3>¿Quiénes somos?</h3>
            <p>
              Somos Imagen &amp; Diagnóstico Maxilofacial, una empresa
              especializada en radiología e imagen para el área de la cabeza, el
              cuello y la cavidad oral, que opera conforme a los más altos
              estándares de calidad, utilizando tecnología de vanguardia y
              brindando una atención impecable a Doctores y Pacientes.
            </p>
          </div>
        </div>

        <div className="about-feature-grid">
          {VALUES.map(({ icon, title, text }) => (
            <article className="about-feature" key={title}>
              <div className="about-feature-icon">
                <i className={icon} />
              </div>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="about-story">
          <div className="about-story-block">
            <h3>Nuestra Misión</h3>
            <p>
              Apoyar a los profesionales de la salud en la obtención de
              diagnósticos más precisos, mediante la oferta de servicios
              auxiliares de diagnóstico de la más alta calidad, tiempos de
              respuesta más ágiles, innovación permanente y una atención
              profundamente humana para especialistas y pacientes.
            </p>
          </div>

          <div className="about-story-block">
            <h3>Nuestra Visión</h3>
            <p>
              Consolidarnos como el aliado estratégico más confiable para los
              profesionales de la salud, funcionando como una extensión natural
              de sus consultorios y clínicas, a través de una cultura de
              excelencia, innovación continua y relaciones construidas sobre la
              confianza, la ética y el servicio.
            </p>
          </div>
        </div>

        <div className="about-promise">
          <div className="about-promise-header">
            <i className="fas fa-award" />
            <h3>Nuestra Promesa</h3>
          </div>
          <p>Cada estudio entregado por iDM representa una promesa:</p>
          <ul>
            <li>
              La promesa de haber trabajado con el máximo cuidado posible.
            </li>
            <li>La promesa de haber respetado el tiempo del paciente.</li>
            <li>
              La promesa de ofrecer al especialista información confiable.
            </li>
            <li>La promesa de actuar siempre con honestidad.</li>
            <li>La promesa de mejorar continuamente.</li>
            <li>
              La promesa de recordar, todos los días, que detrás de cada
              expediente clínico hay una persona que espera recuperar su salud.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
