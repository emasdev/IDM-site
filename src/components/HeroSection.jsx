import { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";

function toMobileImagePath(path) {
  return path.replace(/(\.[^./]+)$/, "m$1");
}

const SLIDES = [
  { img: "assets/img/carousel/1.jpeg", caption: "" },
  {
    img: "assets/img/carousel/2.png",
    caption:
      "Nuestra razón de existir es ayudar a los especialistas de la salud a convertir cada caso clínico en una rehabilitación exitosa.",
  },
  {
    img: "assets/img/carousel/3.png",
    caption:
      "Para prevenir aglomeraciones en la sala de espera, le solicitamos agendar previa cita y acudir puntualmente.",
  },
  {
    img: "assets/img/carousel/4.png",
    caption:
      "Para garantizar disponibilidad, le solicitamos agendar su cita con al menos 24 horas de anticipación.",
  },
  {
    img: "assets/img/carousel/5.png",
    caption:
      "Consulte disponibilidad y horarios enviando un mensaje vía WhatsApp o llamando por teléfono.",
  },
  {
    img: "assets/img/carousel/6.png",
    caption:
      "Contamos con amplia experiencia atendiendo todo tipo de pacientes: infantiles, adultos mayores y personas con capacidades diferentes.",
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
      <header className="hero-header text-secondary text-center">
        <div className="container-fluid d-flex align-items-center flex-column px-0">
          <div
            ref={carouselRef}
            id="carouselExampleDark"
            className="carousel slide hero-carousel"
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
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={toMobileImagePath(slide.img)}
                    />
                    <img
                      src={slide.img}
                      className="d-block w-100 carousel-img"
                      alt={`Imagen del carrusel ${i + 1}`}
                    />
                  </picture>
                  {slide.caption && (
                    <div className="carousel-caption">
                      <p>{slide.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
          En iDM, ayudamos a los profesionales de la salud bucal a tomar mejores
          decisiones clínicas y contribuimos a que más personas recuperen su
          salud.
        </p>
      </div>
    </>
  );
}
