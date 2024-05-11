import React, { useState } from 'react';
import backgroundImage from './images/house2.jpg'; // Make sure the path is correct
import Notification from '../Notification';
import Form from '../Form';  // Import the reusable form component
import './style.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
        consent: false
    });
    const [notification, setNotification] = useState({ message: '', type: 'info', isVisible: false });

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        console.log(name, type, checked, value); // Esto te ayudará a ver qué recibe la función
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form Data:', formData); // Check what data is being sent
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setNotification({ message: 'Email sent successfully!', type: 'success', isVisible: true });
            } else {
                const errorResponse = await response.text(); // If not OK, get the response text
                throw new Error(`Submission failed: ${errorResponse}`);
            }
        } catch (error) {
            console.log('Error:', error);
            setNotification({ message: 'Error sending email!', type: 'error', isVisible: true });
        }
    };

    return (
        <section id="introduce" className="ftco-section ftco-no-pt ftco-no-pb" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div id="introduce-container" className="row d-flex no-gutters">
                <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <div className="col-md-6 pl-md-5 pt-md-5" data-aos="fade-up">
                        <div className="row justify-content-start py-5">
                            <div className="col-md-12 heading-section ftco-animate">
                                <span className="subheading">Welcome to Cleaning Company</span>
                                <h2 className="mb-4">Let's make you fresher than ever</h2>
                                <p id="introduce-p">Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean. A small river named Duden flows
                                    by their place and supplies it with the necessary regelialia. It is a paradisematic
                                    country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {notification.isVisible && (
                <Notification message={notification.message} type={notification.type} />
            )}
        </section>
    );
}

export default Contact;
