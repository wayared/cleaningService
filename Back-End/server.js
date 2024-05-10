require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Configuración de la clave de la API SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// Manejar la solicitud de envío de correo electrónico y guardar los datos del cliente si hay consentimiento
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message, serviceType, consent } = req.body;
    console.log(req.body.consent);

    // Crear el objeto de mensaje para enviar
    const msg = {
        to: 'mcdrcleaning@gmail.com',
        from: 'mcdrcleaning@gmail.com',
        subject: serviceType,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    console.log('Consent:',consent);

    try {
        // Verificar si el consentimiento ha sido dado
        if (consent) {
            // Guardar datos del cliente en un archivo de texto
            const clientData = `${name},${email},${phone}\n`;
            fs.appendFileSync('clients.txt', clientData);
            console.log('Client data saved to clients.txt');
        }

        // Enviar el correo electrónico
        await sgMail.send(msg);
        console.log('Email sent');
        res.send('success');
    } catch (error) {
        console.error('Error:', error.response.body.errors);
        res.status(500).send('error');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
