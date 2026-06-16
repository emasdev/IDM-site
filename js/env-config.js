(function () {
  "use strict";

  // Default value if .env is missing or cannot be loaded.
  window.DEVELOPER_MODE = true;

  function parseBoolean(value) {
    if (!value) {
      return false;
    }
    return /^(1|true|yes|on)$/i.test(String(value).trim());
  }

  fetch("/.env", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(".env not found");
      }
      return response.text();
    })
    .then(function (text) {
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
        break;
      }
      $(document).trigger("developerModeLoaded");
    })
    .catch(function () {
      $(document).trigger("developerModeLoaded");
    });
})();
