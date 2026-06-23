import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";

const SLIDES = [
  { img: "assets/img/gallery/9.jpeg", caption: "" },
  {
    img: "assets/img/fotos/fotos_carrusel1.jpg",
    caption:
      "Para prevenir aglomeraciones en la sala de espera, le rogamos agendar previa cita y acudir puntualmente.",
  },
  {
    img: "assets/img/fotos/fotos_carrusel2.jpg",
    caption:
      "Para garantizar disponibilidad, le rogamos agendar su cita con al menos 24 horas de anticipación.",
  },
  {
    img: "assets/img/fotos/fotos_carrusel3.jpg",
    caption:
      "Atendiendo a las recomendaciones del gobierno de la CDMX, para realizar cualquier estudio se requiere acudir con previa cita.",
  },
  {
    img: "assets/img/fotos/fotos_carrusel4.jpg",
    caption:
      "Durante su visita seguiremos todos los protocolos de higiene, para realizar su estudio de manera segura.",
  },
  {
    img: "assets/img/fotos/fotos_carrusel5.jpg",
    caption:
      "Antes de visitarnos, consulte disponibilidad y horarios enviando un mensaje vía WhatsApp ó llamando por teléfono.",
  },
];

export default function HeroSection({ onOpenStudy }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    const carousel = new Carousel(carouselRef.current, {
      interval: 10000,
      ride: "carousel",
    });
    return () => carousel.dispose();
  }, []);

  return (
    <>
      <header className="text-secondary text-center">
        <div className="container-fluid d-flex align-items-center flex-column px-0">
          <div
            ref={carouselRef}
            id="carouselExampleDark"
            className="carousel slide"
          >
            <div className="carousel-indicators">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={`carousel-item${i === 0 ? " active" : ""}`}
                  data-bs-interval="10000"
                >
                  <img src={slide.img} className="d-block w-100" alt="" />
                  {slide.caption && (
                    <div className="carousel-caption d-none d-md-block">
                      <p>{slide.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>

      {/* CTA */}
      <div className="container text-center mb-4">
        <a
          className="btn btn-xl btn-outline-primary mt-4 cta"
          href="#!"
          onClick={(e) => {
            e.preventDefault();
            onOpenStudy();
          }}
        >
          <span>
            <i className="fas fa-download me-2" />
          </span>
          Orden de estudio electrónica
        </a>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <span>
              <i className="fas fa-tooth" />
            </span>
          </div>
          <div className="divider-custom-line" />
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          IDM, Imagen &amp; Diagnóstico Maxilofacial cuenta con personal
          cualificado con amplia experiencia atendiendo todo tipo de pacientes
          (infantiles, adultos mayores, personas con capacidades diferentes,
          etc.)
        </p>
      </div>
    </>
  );
}
