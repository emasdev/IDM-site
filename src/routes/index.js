const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const router = express.Router();

router.post("/send-email-info", (req, res) => {
    console.log(req.body)
    const { nombre, email, telefono, mensaje } = req.body;
    const contentHTML = `
  <h1>Formulario IDM</h1>
  <ul>
    <li>nombre: ${nombre}</li>
    <li>email: ${email}</li>
    <li>telefono: ${telefono}</li>
  </ul>
  <p>${mensaje}</p>
  `;

    const CLIENT_ID =
        "149709447482-ol5t6u6asf93rkfq3q28g37shpb1ocrg.apps.googleusercontent.com";
    const CLIENT_SECRET = "Z4zVbYqxJtreN57nPh9q6k1y";
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN =
        "1//04hw6ROjAkx0WCgYIARAAGAQSNwF-L9IrB1cu_tomCzQLRB-5CaHuVCGwo48l9m4ug4tqdX07zkQaL2aNGPCd7pgqGHUbGHk4fbY";
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "info@idm-mexico.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });
            const mailOptions = {
                from: "Info <info@idm-mexico.com>",
                to: "estudios@idm-mexico.com",
                subject: "IDM formulario prueba",
                html: contentHTML
            };

            const result = await transporter.sendMail(mailOptions);
        } catch (err) {
            console.log(err);
        }
    }

    sendMail()
        .then(result =>  res.json({ status: 'enviado' }))
        .catch(error => console.log(error.message));
});

router.post("/send-email", (req, res) => {
    console.log(req.body);
    const { nombre, email, telefono, mensaje } = req.body;
    const contentHTML = `
  <h1>Formulario IDM</h1>
  <ul>
    <li>nombre: ${nombre}</li>
    <li>email: ${email}</li>
    <li>telefono: ${telefono}</li>
  </ul>
  <p>${mensaje}</p>
  `;

    const CLIENT_ID =
        "149709447482-ol5t6u6asf93rkfq3q28g37shpb1ocrg.apps.googleusercontent.com";
    const CLIENT_SECRET = "Z4zVbYqxJtreN57nPh9q6k1y";
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN =
        "1//04hw6ROjAkx0WCgYIARAAGAQSNwF-L9IrB1cu_tomCzQLRB-5CaHuVCGwo48l9m4ug4tqdX07zkQaL2aNGPCd7pgqGHUbGHk4fbY";
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: "info@idm-mexico.com",
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });
            const mailOptions = {
                from: "Info <info@idm-mexico.com>",
                to: "estudios@idm-mexico.com",
                subject: "IDM formulario prueba",
                html: contentHTML
            };

            const result = await transporter.sendMail(mailOptions);
        } catch (err) {
            console.log(err);
        }
    }

    sendMail()
        .then(result => res.status(200).send("enviado"))
        .catch(error => console.log(error.message));
});

module.exports = router;
