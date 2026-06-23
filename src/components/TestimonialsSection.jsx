const TESTIMONIALS = [
  {
    author: "Ismael F",
    text: '"Excelente servicio! Desde la atención hasta la higiene por la pandemia. Totalmente recomendable, muchas gracias por la atención!"',
  },
  {
    author: "Damaris S",
    text: '"Excelente atención, todo el personal muy amable. Los precios me parecen bastante accesibles, y el lugar cumple con todas las medidas preventivas para el Covid"',
  },
  {
    author: "Andie B",
    text: '"Tuve mis primeros estudios completos con IDM y la verdad las mejores medidas de sanidad, muy buen trato del equipo medico que atiende, yo me hice un estudio completo y la mejor de las atenciones, muy recomendado, hacen un trabajo muy profesional, muy organizado desde que agendas la cita y estas ahí. 👏👏"',
  },
];

function Stars() {
  return (
    <p className="text-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="fas fa-star" />
      ))}
    </p>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="page-section bg-primary text-primary mb-0">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-primary">
          Testimonios
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-tooth" />
          </div>
          <div className="divider-custom-line" />
        </div>
        <div className="row">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="col-lg-4">
              <Stars />
              <p>{t.text}</p>
              <p className="text-blue">- {t.author}</p>
            </div>
          ))}
        </div>
        <div className="row mt-2">
          <div className="d-flex justify-content-around">
            <a
              className="text-primary mr-2"
              href="https://search.google.com/local/writereview?placeid=ChIJgZRy773_0YURtdYmmj_IoE8"
              rel="noreferrer"
              target="_blank"
            >
              Escribe un comentario
            </a>
            <a
              className="text-primary ml-2"
              href="https://search.google.com/local/reviews?placeid=ChIJgZRy773_0YURtdYmmj_IoE8"
              rel="noreferrer"
              target="_blank"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
