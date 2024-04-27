require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const app = express();

// SendGrid API key setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.post('/send-email', (req, res) => {
    const { name, email, phone, message, serviceType } = req.body;

    const msg = {
        to: 'mcdrcleaning@gmail.com', // Your company email
        from: 'mcdrcleaning@gmail.com', // Use the email verified with SendGrid
        subject: serviceType,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Send the email
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.send('success');
        })
        .catch((error) => {
            console.error(error.toString());
            res.send('error');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
