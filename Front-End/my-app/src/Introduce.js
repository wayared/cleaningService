import React, { useState } from 'react';
import backgroundImage from './images/house.jpg'; // Make sure the path is correct
import Notification from './Notifications';
import './style.css'

function Introduce() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
    });
    const [notification, setNotification] = useState({ message: '', type: '', isVisible: false });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Simulate a POST request
        try {
            const response = await fetch('http://localhost:3001/send-email', { // Update with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setNotification({ message: 'Request successful!', type: 'success', isVisible: true });
            } else {
                throw new Error('Submission failed due to server error');
            }
        } catch (error) {
            setNotification({ message: error.message, type: 'error', isVisible: true });
        }
    };

    return (
        <section id="introduce" className="ftco-section ftco-no-pt ftco-no-pb" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div id="introduce-container" className="row d-flex no-gutters">
                    <div id="appoinment" className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-up">
                        <div className="bg-primary rounded-4 p-4 position-relative overflow-hidden">
                            <h3 className="text-white text-center mb-2 request">Request Service</h3>
                            <p className="text-white mb-4">Enter your contact details here to help us serve you better & faster.</p>
                            <form id='appoinment-form' className="row g-4 align-items-center pb-sm-6" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" type="email" className="form-control" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone">Phone</label>
                                    <input name="phone" type="tel" className="form-control" required value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="serviceType">Service Type</label>
                                    <select name="serviceType" className="form-control" value={formData.serviceType} onChange={handleChange}>
                                        <option value="">Select a service</option>
                                        <option value="basic_cleaning">Basic Cleaning</option>
                                        <option value="deep_cleaning">Deep Cleaning</option>
                                        <option value="event_cleaning">Special Event Cleaning</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"
                                        required value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn mb-0">Get an appointment</button>
                            </form>
                        </div>
                    </div>
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
        </section>
    );
}

export default Introduce;
