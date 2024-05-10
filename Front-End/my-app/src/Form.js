import React, { useState } from 'react';

function Form({ formData, handleChange, handleSubmit }) {
    const [consent, setConsent] = useState(false);

    const handleConsentChange = (e) => {
        setConsent(e.target.checked);
        console.log('Consent value:', e.target.checked);
    };

    return (
        <div id="appoinment" className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-up">
            <div className="bg-primary rounded-4 p-4 position-relative overflow-hidden">
                <h3 className="text-white text-center mb-2 request">Request Service</h3>
                <p className="text-white mb-4">Enter your contact details here to help us serve you better & faster.</p>
                <form id='appoinment-form' className="row g-4 align-items-center pb-sm-6" onSubmit={(e) => handleSubmit(e, consent)}>
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
                    <div className="col-12">
                        <input type="checkbox" name="consent" value={formData.consent} onChange={handleChange} />
                        <label htmlFor="consent">I agree to allow my data to be used for future notices, information, or promotions.</label>
                    </div>
                    <button type="submit" className="btn mb-0">Get an appointment</button>
                </form>
            </div>
        </div>
    );
}

export default Form;