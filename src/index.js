const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3500');
  res.setHeader('Access-Control-Allow-Origin', 'https://idm-mexico.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));




app.listen(PORT, () => {
  console.log("Iniciar servidor puerto " + PORT);
});
