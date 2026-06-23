import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ show, onClose, children, size = "xl" }) {
  useEffect(() => {
    if (!show) return;
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [show]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && show) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [show, onClose]);

  if (!show) return null;

  return createPortal(
    <>
      <div
        className="portfolio-modal modal fade show"
        style={{ display: "block", overflowY: "auto" }}
        tabIndex="-1"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className={`modal-dialog modal-${size}`}>
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center pb-5">{children}</div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>,
    document.body,
  );
}
