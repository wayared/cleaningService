import React from 'react';
import Select from 'react-select';  // Importa React Select
import InputMask from 'react-input-mask';  // Importa InputMask


const options = [
    { value: 'basic_cleaning', label: 'Basic Cleaning' },
    { value: 'deep_cleaning', label: 'Deep Cleaning' },
    { value: 'event_cleaning', label: 'Special Event Cleaning' }
];

function Form({ formData, handleChange, handleSubmit }) {
    const handleSelectChange = selectedOption => {
        handleChange({
            target: {
                name: 'serviceType',
                value: selectedOption.value
            }
        });
    };

    return (
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
                        <label htmlFor="phone">Phone (+1)</label>
                        <InputMask
                            mask="(999) 999-9999"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            name="phone"
                            maskChar=" "
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="serviceType">Service Type</label>
                        <Select
                            options={options}
                            value={options.find(option => option.value === formData.serviceType)}
                            onChange={handleSelectChange}
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" className="form-control" rows="3" required value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12">
                        <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} />
                        <label htmlFor="consent">I agree to allow my data to be used for future notices, information, or promotions.</label>
                    </div>
                    <button type="submit" className="btn mb-0">Get an appointment</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
