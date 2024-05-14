import React, { useState } from 'react';
import backgroundImage from './images/house3.jpg'; // Make sure the path is correct
import Notification from './Notification';
import Form from './Form';  // Import the reusable form component
import './stylesheets/style.css'

function Introduce() {
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
                                <span className="subheading">Welcome to MC Dream Cleaning Company</span>
                                <h2 className="mb-4">Experience a new level of cleanliness and comfort with our expert services.</h2>
                                <p id="introduce-p">Our dedicated team goes above and beyond to deliver exceptional cleaning services for your home or office. With a commitment to quality and customer satisfaction, we'll leave your space sparkling clean and inviting. Contact us today to schedule your cleaning and experience the McDream Cleaning difference!</p>
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

export default Introduce;
