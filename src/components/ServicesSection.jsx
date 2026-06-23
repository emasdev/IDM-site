import { useState } from "react";
import Modal from "./Modal";

const SERVICES = [
  {
    id: 1,
    thumb: "assets/img/gallery/1.png",
    title: "Log Cabin",
    modalImg: "assets/img/gallery/1.png",
  },
  {
    id: 2,
    thumb: "assets/img/gallery/2.png",
    title: "Tasty Cake",
    modalImg: "assets/img/gallery/2.png",
  },
  {
    id: 3,
    thumb: "assets/img/gallery/3.jpg",
    title: "Circus Tent",
    modalImg: "assets/img/gallery/3.jpg",
  },
  {
    id: 4,
    thumb: "assets/img/gallery/7.jpg",
    title: "Controller",
    modalImg: "assets/img/gallery/8.jpg",
  },
  {
    id: 5,
    thumb: "assets/img/gallery/5.jpg",
    title: "Locked Safe",
    modalImg: "assets/img/gallery/5.jpg",
  },
  {
    id: 6,
    thumb: "assets/img/gallery/6.jpg",
    title: "Submarine",
    modalImg: "assets/img/gallery/6.jpg",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Servicios
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
                      <i className="fas fa-plus fa-3x" />
                    </span>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={service.thumb}
                  alt={service.title}
                />
              </div>
            </div>
          ))}
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
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Mollitia neque assumenda ipsam nihil, molestias magnam,
                  recusandae quos quis inventore quisquam velit asperiores,
                  vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                  Nam.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveService(null)}
                >
                  <span>
                    <i className="fas fa-times fa-fw" />
                  </span>{" "}
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
