import { useState } from "react";
import Modal from "./Modal";

const SERVICES = [
  {
    id: 1,
    thumb: "assets/img/estudios-min/1.png",
    title: "Rx. PANORÁMICA",
    modalImg: "assets/img/estudios/1.png",
    description:
      "La radiografía panorámica dental, también conocida como ortopantomografía, es un estudio médico de imagen en dos dimensiones (2D) rápido y no invasivo que utiliza una dosis mínima de radiación para capturar todas las estructuras de la boca en una sola toma.",
  },
  {
    id: 2,
    thumb: "assets/img/estudios-min/2.png",
    title: "Rx. LATERAL DE CRÁNEO",
    modalImg: "assets/img/estudios/2.png",
    description:
      "Una radiografía lateral de cráneo con plomada es un estudio de imagen especializado en dos dimensiones (2D), en el que se añade una plomada física (cadena metálica vertical que cae por gravedad) al momento de tomar la radiografía. Esto sirve como una referencia visual de la vertical verdadera para evaluar con total precisión la postura de la cabeza, el cuello y la columna cervical en relación con la gravedad.",
  },
  {
    id: 3,
    thumb: "assets/img/estudios-min/3.png",
    title: "Rx. LATERAL DE CRÁNEO CON PLOMADA",
    modalImg: "assets/img/estudios/3.png",
    description:
      "Una radiografía lateral de cráneo con plomada es un estudio de imagen especializado en dos dimensiones (2D), en el que se añade una plomada física (cadena metálica vertical que cae por gravedad) al momento de tomar la radiografía. Esto sirve como una referencia visual de la vertical verdadera para evaluar con total precisión la postura de la cabeza, el cuello y la columna cervical en relación con la gravedad.",
  },
  {
    id: 4,
    thumb: "assets/img/estudios-min/4.png",
    title: "Rx. PERIAPICAL INDIVIDUAL",
    modalImg: "assets/img/estudios/4.png",
    description:
      "Una radiografía periapical individual es una pequeña radiografía dental utilizada para observar un diente completo, desde la corona hasta más allá de la raíz. A diferencia de las radiografías panorámicas que muestran toda la boca, este tipo de radiografía se enfoca detalladamente en solo uno o dos dientes por película.",
  },
  {
    id: 5,
    thumb: "assets/img/estudios-min/5.png",
    title: "SERIE Rx. PERIAPICAL COMPLETA",
    modalImg: "assets/img/estudios/5.png",
    description:
      "Básicamente, este es el mismo estudio que la Rx. Periapical individual, pero la diferencia radica en el alcance y el objetivo del diagnóstico. Mientras la radiografía periapical individual evalúa un problema puntual en uno o dos órganos dentarios, una Serie de Rx. Periapical Completa ofrece un mapa detallado de toda la boca.",
  },
  {
    id: 6,
    thumb: "assets/img/estudios-min/6.png",
    title: "Rx. ATM COMPARATIVA (BOCA ABIERTA/CERRADA)",
    modalImg: "assets/img/estudios/6.png",
    description:
      "Una radiografía comparativa de la articulación temporomandibular (ATM) es un estudio médico de imagen en dos dimensiones (2D), rápido y no invasivo que utiliza una dosis mínima de radiación para capturar la estructura de ambas articulaciones mandibulares (izquierda y derecha), tanto con la boca abierta como con la boca cerrada.",
  },
  {
    id: 7,
    thumb: "assets/img/estudios-min/7.png",
    title: "Rx. AP - PA DE CRÁNEO",
    modalImg: "assets/img/estudios/7.png",
    description:
      "Una radiografía AP (Anteroposterior) o PA (Posteroanterior) de cráneo es un estudio médico de imagen en dos dimensiones (2D), rápido y no invasivo que utiliza una dosis mínima de radiación para capturar una vista de los huesos del cráneo, proyectada de adelante hacia atrás (AP) o de atrás hacia adelante (PA). ",
  },
  {
    id: 8,
    thumb: "assets/img/estudios-min/8.png",
    title: "Rx.CARPAL",
    modalImg: "assets/img/estudios/8.png",
    description:
      "Una radiografía carpal es un estudio médico de imagen en dos dimensiones (2D), rápido y no invasivo que utiliza una dosis mínima de radiación para capturar las estructuras de la mano y la muñeca. Generalmente se practica en la mano izquierda.",
  },
  {
    id: 9,
    thumb: "assets/img/estudios-min/9.png",
    title: "Rx.SENOS PARANASALES",
    modalImg: "assets/img/estudios/9.png",
    description:
      "Una radiografía de senos paranasales es un estudio médico de imagen en dos dimensiones (2D), rápido y no invasivo que utiliza una dosis mínima de radiación para capturar las estructuras de los senos paranasales.",
  },
  {
    id: 10,
    thumb: "assets/img/estudios-min/10.png",
    title: "TOMOGRAFÍA CBCT",
    modalImg: "assets/img/estudios/10.png",
    description:
      "Una tomografía CBCT (Cone Beam Computed Tomography) es un estudio médico de imagen en tres dimensiones (3D), rápido y no invasivo que utiliza una dosis mínima de radiación para capturar las estructuras dentales y maxilofaciales con gran detalle.",
  },
  {
    id: 11,
    thumb: "assets/img/estudios-min/11.png",
    title: "ENDOSCAN 5x5",
    modalImg: "assets/img/estudios/11.png",
    description:
      "Un endoscan 5X5 o tomografía CBCT de un solo órgano dentario, es una radiografía en tres dimensiones (3D) de alta resolución enfocada exclusivamente en un solo diente y sus tejidos circundantes. A diferencia de las tomografías médicas convencionales, utiliza la tecnología de Haz Cónico (Cone Beam Computed Tomography) con un campo de visión muy pequeño (FOV reducido), lo que permite a los endodoncistas observar la anatomía interna del diente con un nivel de detalle milimétrico y con una dosis de radiación mínima.",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Nuestros Servicios
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <span>
              <i className="fas fa-tooth" />
            </span>
          </div>
          <div className="divider-custom-line" />
        </div>
        <div className="row justify-content-center">
          {SERVICES.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                role="button"
                tabIndex={0}
                onClick={() => setActiveService(service)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setActiveService(service)
                }
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <span>
                      <i className="fas fa-search-plus fa-3x" />
                    </span>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={service.thumb}
                  alt={service.title}
                />
              </div>
              <h5 className="text-center py-4">{service.title}</h5>
            </div>
          ))}
        </div>
        <div className="row">
          <p className="text-center">
            <strong>NOTA:</strong> El día de su estudio, el paciente debe acudir
            con la boca aseada y sin portar objetos metálicos en cabeza, cuello
            y boca, como: prótesis dentales removibles, piercings, aretes,
            collares, joyas, anteojos, pasadores para el cabello, etc., para
            evitar interferencias en la imagen. Las damas deben notificar si
            existe sospecha de embarazo.
          </p>
        </div>
      </div>

      <Modal
        show={activeService !== null}
        onClose={() => setActiveService(null)}
      >
        {activeService && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {activeService.title}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    <span>
                      <i className="fas fa-tooth" />
                    </span>
                  </div>
                  <div className="divider-custom-line" />
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={activeService.modalImg}
                  alt={activeService.title}
                />
                <p className="mb-4">{activeService.description}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
