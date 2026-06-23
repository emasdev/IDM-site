import { useRef, useState } from "react";
import Modal from "./Modal";
import SimpleCalendar from "./SimpleCalendar";

const DEVELOPER_MODE = import.meta.env.VITE_DEVELOPER_MODE === "true";

// ── Study catalogue ───────────────────────────────────────────────────────────
const EXTRAORAL_LEFT = [
  "Panorámica",
  "Panorámica + 3 periapicales",
  "Lateral de cráneo",
  "ATM",
  "Carpal",
];
const EXTRAORAL_RIGHT = [
  "Frontal AP-PA",
  "Frontal (Waters)",
  "Frontal (Caldwell)",
  "Frontal SMV (Hirtz)",
  "Senos paranasales",
];
const ORTODONCIA = [
  "Estudio completo",
  "Trazado cef. lateral",
  "Trazado cef. frontal",
  "Análisis de modelos",
  "Modelos de estudio",
];
const INTRAORAL_LEFT = [
  "Serie periapical completa",
  "Serie periapical superior",
  "Serie periapical inferior",
];
const INTRAORAL_RIGHT = [
  "Serie interproximal",
  "Rx. Oclusal superior",
  "Rx. Oclusal inferior",
];
const TOMOGRAFIA = [
  "Tomografía ambas arcadas",
  "Tomografía arcada superior",
  "Tomografía arcada inferior",
];
const FOTOGRAFIA = ["Foto intraoral", "Foto extraoral", "Análisis facial"];
const UPPER_TEETH = [
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
];
const LOWER_TEETH = [
  48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(date) {
  if (!date) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${date.getFullYear()}`;
}

function StudyCheckbox({ label, checked, onChange }) {
  return (
    <label className="study-option">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked || false}
        onChange={onChange}
      />{" "}
      {label}
    </label>
  );
}

function ToothCheckbox({ num, checked, onChange }) {
  return (
    <label className="tooth-item">
      <input
        className="form-check-input diente"
        type="checkbox"
        checked={checked || false}
        onChange={onChange}
      />
      <span>{num}</span>
    </label>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function StudyOrderModal({ show, onClose }) {
  const [step, setStep] = useState(0);

  // Step 0 — forms
  const [doctor, setDoctor] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  });
  const [paciente, setPaciente] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  });
  const formRef = useRef(null);

  // Step 1 — studies
  const [estudios, setEstudios] = useState({});
  const [dientes, setDientes] = useState({});
  const [endoscanPieza, setEndoscanPieza] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Step 2 — schedule
  const [selectedDate, setSelectedDate] = useState(null);
  const [hora, setHora] = useState("");
  const [minutos, setMinutos] = useState("");

  const isSaturday = selectedDate?.getDay() === 6;
  const availableHours = isSaturday
    ? [9, 10, 11, 12, 13]
    : [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const isScheduleValid = DEVELOPER_MODE || (selectedDate && hora && minutos);

  const toggleEstudio = (name) =>
    setEstudios((prev) => ({ ...prev, [name]: !prev[name] }));

  const toggleDiente = (num) =>
    setDientes((prev) => ({ ...prev, [num]: !prev[num] }));

  const goToStep = (n) => setStep(n);

  // Reset hour when date changes to a Saturday (remove out-of-range hours)
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (date.getDay() === 6 && Number(hora) > 13) {
      setHora("");
      setMinutos("");
    }
  };

  // Step 0 → 1 — validate form
  const handleNextFromStep0 = () => {
    if (DEVELOPER_MODE) {
      goToStep(1);
      return;
    }
    const form = formRef.current;
    if (form?.checkValidity()) {
      goToStep(1);
    } else {
      form?.classList.add("was-validated");
    }
  };

  // Confirmation summary data
  const selectedStudiesList = [
    ...Object.entries(estudios)
      .filter(([, v]) => v)
      .map(([n]) => n),
    ...Object.entries(dientes)
      .filter(([, v]) => v)
      .map(([n]) => `RX Periapical individual: ${n}`),
    ...(estudios["Endoscan (Estudio endodóntico 3D)"] && endoscanPieza
      ? [`Endoscan - Pieza: ${endoscanPieza}`]
      : []),
  ];

  // ── Render steps ─────────────────────────────────────────────────────────────
  const renderStep0 = () => (
    <div>
      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">
        Orden de estudio
      </h2>
      <div className="col-lg-8 m-auto">
        <form
          ref={formRef}
          id="datos-doctor"
          className="needs-validation"
          noValidate
        >
          {/* Doctor */}
          <div className="row pt-3 group">
            <div className="col-12">
              <h4 className="text-start">Doctor</h4>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="doctor-nombre"
                  placeholder="Nombre"
                  value={doctor.nombre}
                  onChange={(e) =>
                    setDoctor((d) => ({ ...d, nombre: e.target.value }))
                  }
                />
                <label htmlFor="doctor-nombre">Nombre</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="doctor-apellidos"
                  placeholder="Apellidos"
                  value={doctor.apellidos}
                  onChange={(e) =>
                    setDoctor((d) => ({ ...d, apellidos: e.target.value }))
                  }
                />
                <label htmlFor="doctor-apellidos">Apellidos</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="tel"
                  className="form-control"
                  id="doctor-telefono"
                  placeholder="Teléfono"
                  value={doctor.telefono}
                  onChange={(e) =>
                    setDoctor((d) => ({ ...d, telefono: e.target.value }))
                  }
                />
                <label htmlFor="doctor-telefono">Teléfono</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="email"
                  className="form-control"
                  id="doctor-email"
                  placeholder="Email"
                  value={doctor.email}
                  onChange={(e) =>
                    setDoctor((d) => ({ ...d, email: e.target.value }))
                  }
                />
                <label htmlFor="doctor-email">Email</label>
              </div>
            </div>
          </div>

          {/* Paciente */}
          <div className="row pt-3 my-4 group">
            <div className="col-12">
              <h4 className="text-start">Paciente</h4>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="paciente-nombre"
                  placeholder="Nombre"
                  value={paciente.nombre}
                  onChange={(e) =>
                    setPaciente((p) => ({ ...p, nombre: e.target.value }))
                  }
                />
                <label htmlFor="paciente-nombre">Nombre</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="paciente-apellidos"
                  placeholder="Apellidos"
                  value={paciente.apellidos}
                  onChange={(e) =>
                    setPaciente((p) => ({ ...p, apellidos: e.target.value }))
                  }
                />
                <label htmlFor="paciente-apellidos">Apellidos</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  required
                  type="tel"
                  className="form-control"
                  id="paciente-telefono"
                  placeholder="Teléfono"
                  value={paciente.telefono}
                  onChange={(e) =>
                    setPaciente((p) => ({ ...p, telefono: e.target.value }))
                  }
                />
                <label htmlFor="paciente-telefono">Teléfono</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="paciente-email"
                  placeholder="Email"
                  value={paciente.email}
                  onChange={(e) =>
                    setPaciente((p) => ({ ...p, email: e.target.value }))
                  }
                />
                <label htmlFor="paciente-email">Email</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="mb-4">Ingresar datos.</p>
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={handleNextFromStep0}
      >
        Siguiente{" "}
        <span>
          <i className="fas fa-arrow-right fa-fw" />
        </span>
      </button>
    </div>
  );

  const renderStep1 = () => (
    <div>
      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">
        Orden de estudio
      </h2>
      <div className="col-lg-12 m-auto">
        <div className="row study-order-grid g-3 text-start">
          {/* Extraoral */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Radiografía extraoral</h4>
              <div className="row">
                <div className="col-md-6">
                  {EXTRAORAL_LEFT.map((s) => (
                    <StudyCheckbox
                      key={s}
                      label={s}
                      checked={estudios[s]}
                      onChange={() => toggleEstudio(s)}
                    />
                  ))}
                </div>
                <div className="col-md-6">
                  {EXTRAORAL_RIGHT.map((s) => (
                    <StudyCheckbox
                      key={s}
                      label={s}
                      checked={estudios[s]}
                      onChange={() => toggleEstudio(s)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ortodoncia */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Ortodoncia</h4>
              {ORTODONCIA.map((s) => (
                <StudyCheckbox
                  key={s}
                  label={s}
                  checked={estudios[s]}
                  onChange={() => toggleEstudio(s)}
                />
              ))}
            </div>
          </div>

          {/* Intraoral */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Radiografía intraoral</h4>
              <div className="row">
                <div className="col-md-6">
                  {INTRAORAL_LEFT.map((s) => (
                    <StudyCheckbox
                      key={s}
                      label={s}
                      checked={estudios[s]}
                      onChange={() => toggleEstudio(s)}
                    />
                  ))}
                </div>
                <div className="col-md-6">
                  {INTRAORAL_RIGHT.map((s) => (
                    <StudyCheckbox
                      key={s}
                      label={s}
                      checked={estudios[s]}
                      onChange={() => toggleEstudio(s)}
                    />
                  ))}
                </div>
              </div>
              <label className="study-option mt-2">
                RX. Periapical individual
              </label>
              <div className="tooth-grid">
                <div className="tooth-row">
                  {UPPER_TEETH.map((n) => (
                    <ToothCheckbox
                      key={n}
                      num={n}
                      checked={dientes[n]}
                      onChange={() => toggleDiente(n)}
                    />
                  ))}
                </div>
                <div className="tooth-row">
                  {LOWER_TEETH.map((n) => (
                    <ToothCheckbox
                      key={n}
                      num={n}
                      checked={dientes[n]}
                      onChange={() => toggleDiente(n)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tomografía */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Tomografía</h4>
              {TOMOGRAFIA.map((s) => (
                <StudyCheckbox
                  key={s}
                  label={s}
                  checked={estudios[s]}
                  onChange={() => toggleEstudio(s)}
                />
              ))}
              <StudyCheckbox
                label="Endoscan (Estudio endodóntico 3D)"
                checked={estudios["Endoscan (Estudio endodóntico 3D)"]}
                onChange={() =>
                  toggleEstudio("Endoscan (Estudio endodóntico 3D)")
                }
              />
              <div className="study-inline-field">
                <span>Pieza:</span>
                <input
                  className="study-text-input"
                  type="text"
                  value={endoscanPieza}
                  onChange={(e) => setEndoscanPieza(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Fotografía */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Fotografía clínica</h4>
              <div className="row">
                {FOTOGRAFIA.map((s) => (
                  <div key={s} className="col-md-4">
                    <StudyCheckbox
                      label={s}
                      checked={estudios[s]}
                      onChange={() => toggleEstudio(s)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Observaciones */}
          <div className="col-lg-6">
            <div className="study-card">
              <h4>Observaciones</h4>
              <textarea
                className="study-notes"
                rows={4}
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="my-4">Seleccionar estudios a realizar</p>
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => goToStep(0)}
      >
        <span>
          <i className="fas fa-arrow-left fa-fw" />
        </span>{" "}
        Anterior
      </button>
      <button className="btn btn-outline-primary" onClick={() => goToStep(2)}>
        Siguiente{" "}
        <span>
          <i className="fas fa-arrow-right fa-fw" />
        </span>
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">
        Seleccionar horario
      </h2>
      <div className="col-lg-8 m-auto">
        <div id="calendario" className="calendar-container">
          <SimpleCalendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>

        {/* Time selector */}
        <form id="form-horarios" className="row needs-validation" noValidate>
          <div className="col-md-6">
            <select
              id="select-hora"
              className="form-select text-center"
              value={hora}
              onChange={(e) => {
                setHora(e.target.value);
                setMinutos("");
              }}
            >
              <option value="" disabled>
                -- Hora --
              </option>
              {availableHours.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <select
              id="select-minutos"
              className="form-select text-center"
              value={minutos}
              onChange={(e) => setMinutos(e.target.value)}
            >
              <option value="" disabled>
                -- Minutos --
              </option>
              {["00", "15", "30", "45"].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          {selectedDate && (
            <div className="col-md-12">
              <div className="data">
                <div>Su cita será programada para el día</div>
                <div className="cita-fecha">
                  <strong>{formatDate(selectedDate)}</strong>
                </div>
                {hora && minutos && (
                  <div>
                    a las {hora}:{minutos} hrs.
                  </div>
                )}
              </div>
            </div>
          )}
        </form>
      </div>

      <p className="mb-4 mt-3">Seleccione día y hora para confirmar cita.</p>
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => goToStep(1)}
      >
        <span>
          <i className="fas fa-arrow-left fa-fw" />
        </span>{" "}
        Anterior
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => goToStep(3)}
        disabled={!isScheduleValid}
      >
        Agendar{" "}
        <span>
          <i className="fas fa-arrow-right fa-fw" />
        </span>
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-4">
        Confirmar datos
      </h2>
      <div className="col-lg-12 m-auto">
        <div className="row">
          {/* Doctor */}
          <div className="col-md-6" id="confirmar-doctor">
            <div className="group text-start p-3">
              <h5 className="category">Doctor</h5>
              <div className="info">
                <div>
                  <strong>
                    {doctor.nombre} {doctor.apellidos}
                  </strong>
                </div>
                <div>{doctor.email}</div>
                <div>{doctor.telefono}</div>
              </div>
            </div>
          </div>

          {/* Paciente */}
          <div className="col-md-6" id="confirmar-paciente">
            <div className="group text-start p-3">
              <h5 className="category">Paciente</h5>
              <div className="info">
                <div>
                  <strong>
                    {paciente.nombre} {paciente.apellidos}
                  </strong>
                </div>
                <div>{paciente.email}</div>
                <div>{paciente.telefono}</div>
              </div>
            </div>
          </div>

          {/* Studies */}
          <div className="col-12 my-3">
            <div className="group text-start p-3">
              <h4>Orden de estudio</h4>
              {selectedStudiesList.length > 0 ? (
                <ul className="mb-0">
                  {selectedStudiesList.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-0 text-muted">Sin estudios seleccionados</p>
              )}
              {observaciones && (
                <p className="mt-2 mb-0">
                  <strong>Observaciones:</strong> {observaciones}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Date & time */}
        <div className="col-12 mb-3">
          <div>Fecha de asistencia</div>
          <div className="cita-fecha">
            <strong>{formatDate(selectedDate)}</strong>
          </div>
          <div>
            a las {hora}:{minutos} hrs.
          </div>
        </div>
      </div>

      <button
        className="btn btn-outline-primary me-2"
        onClick={() => goToStep(2)}
      >
        <span>
          <i className="fas fa-arrow-left fa-fw" />
        </span>{" "}
        Anterior
      </button>
      <button className="btn btn-outline-primary" onClick={() => goToStep(4)}>
        Confirmar{" "}
        <span>
          <i className="fas fa-arrow-right fa-fw" />
        </span>
      </button>
    </div>
  );

  const renderStep4 = () => (
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
          En breve nos comunicaremos con su paciente
        </p>
      </div>
      <button className="btn btn-outline-primary mt-3" onClick={onClose}>
        Cerrar{" "}
        <span>
          <i className="fas fa-times" />
        </span>
      </button>
    </div>
  );

  const STEPS = [
    renderStep0,
    renderStep1,
    renderStep2,
    renderStep3,
    renderStep4,
  ];

  return (
    <Modal show={show} onClose={onClose}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">{STEPS[step]?.()}</div>
        </div>
      </div>
    </Modal>
  );
}
