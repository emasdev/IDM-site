(function () {
  "use strict";

  // Default value if .env is missing or cannot be loaded.
  window.DEVELOPER_MODE = false;

  function parseBoolean(value) {
    if (!value) {
      return false;
    }
    return /^(1|true|yes|on)$/i.test(String(value).trim());
  }

  fetch("/.env", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) {
        console.warn(
          "No se pudo cargar el archivo .env (Status: " +
            response.status +
            "). Es posible que el servidor lo esté bloqueando.",
        );
        throw new Error(".env not found");
      }
      return response.text();
    })
    .then(function (text) {
      console.log(".env cargado correctamente");
      var lines = text.split(/\r?\n/);
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line || line.startsWith("#")) {
          continue;
        }
        var parts = line.split("=");
        var key = parts[0] ? parts[0].trim() : "";
        if (key !== "DEVELOPER_MODE") {
          continue;
        }
        var rawValue = parts.slice(1).join("=").trim();
        rawValue = rawValue.replace(/^['\"]|['\"]$/g, "");
        window.DEVELOPER_MODE = parseBoolean(rawValue);
        console.log("DEVELOPER_MODE set to:", window.DEVELOPER_MODE);
        break;
      }
      $(document).trigger("developerModeLoaded");
    })
    .catch(function (error) {
      console.error("Error leyendo .env:", error);
      $(document).trigger("developerModeLoaded");
    });
})();
