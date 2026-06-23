import { useRef, useState } from "react";
import Modal from "./Modal";

const DEVELOPER_MODE = import.meta.env.VITE_DEVELOPER_MODE === "true";

export default function ContactInfoModal({ show, onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const formRef = useRef(null);

  const handleSubmit = () => {
    if (DEVELOPER_MODE) {
      setStep(1);
      return;
    }
    const el = formRef.current;
    if (el?.checkValidity()) {
      setStep(1);
    } else {
      el?.classList.add("was-validated");
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {step === 0 && (
              <div>
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">
                  Pedir informes
                </h2>
                <div className="col-lg-8 m-auto">
                  <form ref={formRef} className="needs-validation" noValidate>
                    <div className="row pt-3 my-4 group">
                      <div className="col-12">
                        <h4 className="text-start">Contacto</h4>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="contacto-nombre"
                            placeholder="Nombre"
                            value={form.nombre}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, nombre: e.target.value }))
                            }
                          />
                          <label htmlFor="contacto-nombre">Nombre</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="contacto-apellidos"
                            placeholder="Apellidos"
                            value={form.apellidos}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                apellidos: e.target.value,
                              }))
                            }
                          />
                          <label htmlFor="contacto-apellidos">Apellidos</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="tel"
                            className="form-control"
                            id="contacto-telefono"
                            placeholder="Teléfono"
                            value={form.telefono}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                telefono: e.target.value,
                              }))
                            }
                          />
                          <label htmlFor="contacto-telefono">Teléfono</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="contacto-email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, email: e.target.value }))
                            }
                          />
                          <label htmlFor="contacto-email">Email</label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-floating mb-3">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="contacto-message"
                            placeholder="Mensaje"
                            value={form.mensaje}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                mensaje: e.target.value,
                              }))
                            }
                          />
                          <label htmlFor="contacto-message">Mensaje</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <p className="mb-4">Ingresar datos.</p>
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Siguiente{" "}
                  <span>
                    <i className="fas fa-arrow-right fa-fw" />
                  </span>
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="text-center">
                  <span>
                    <i className="fas fa-check-circle" />
                  </span>
                </div>
                <div className="col-lg-8 m-auto">
                  <p className="mb-4">
                    <strong style={{ marginRight: 5 }}>Gracias</strong>
                    <br />
                    En breve nos comunicaremos con usted
                  </p>
                </div>
                <button
                  className="btn btn-outline-primary mt-3"
                  onClick={onClose}
                >
                  Cerrar{" "}
                  <span>
                    <i className="fas fa-times" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
