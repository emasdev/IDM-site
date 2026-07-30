export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5215516836073"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        transition: "transform 0.2s, box-shadow 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      }}
      aria-label="Enviar mensaje por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.774L0 32l8.469-2.001A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.765-1.848l-.485-.289-5.027 1.187 1.212-4.899-.316-.502A13.237 13.237 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.878c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.633-.199-.899.199-.266.398-1.032 1.295-1.265 1.561-.233.266-.466.299-.864.1-.398-.199-1.681-.619-3.203-1.977-1.183-1.057-1.982-2.362-2.215-2.76-.233-.398-.025-.613.175-.811.18-.178.398-.466.598-.699.199-.233.266-.398.398-.664.133-.266.066-.499-.033-.698-.1-.199-.899-2.165-1.232-2.963-.324-.778-.654-.673-.899-.685l-.766-.013c-.266 0-.698.1-1.065.499-.366.398-1.398 1.366-1.398 3.331s1.432 3.863 1.631 4.129c.199.266 2.818 4.303 6.828 6.031.954.412 1.699.658 2.281.842.958.305 1.831.262 2.52.159.768-.114 2.355-.962 2.688-1.891.333-.929.333-1.726.233-1.891-.1-.166-.366-.266-.764-.465z" />
      </svg>
    </a>
  );
}
