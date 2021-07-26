const express = require("express");
const path = require("path");
const app = express();
const port = 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Iniciar servidor puerto " + port);
});
