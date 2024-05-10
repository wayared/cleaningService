require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Configurar la API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors({ // Limita el acceso a tu dominio de frontend
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// Ruta para enviar correo y guardar datos
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message, serviceType, consent } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !phone || !message || !serviceType) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Crear el mensaje de correo
    const msg = {
        to: 'mcdrcleaning@gmail.com',
        from: 'mcdrcleaning@gmail.com',
        subject: serviceType,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        // Guardar datos solo si el consentimiento es `true`
        if (consent) {
            const clientData = `${name},${email},${phone}\n`;
            fs.appendFileSync('clients.txt', clientData);
            console.log('Client data saved to clients.txt');
        }

        // Enviar el correo
        await sgMail.send(msg);
        console.log('Email sent');
        res.json({ status: 'success' });
    } catch (error) {
        console.error('Error:', error.response ? error.response.body.errors : error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
