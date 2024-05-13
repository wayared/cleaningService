import React from 'react';
import backgroundImage from './images/background.jpg'; // Make sure the path is correct
import regularCleaningImage from './images/regular.jpg'; // Adjust the path as necessary
import kitchenCleaningImage from './images/kitchen.jpg';
import glassCleaningImage from './images/glass.jpg';
import deepCleaningImage from './images/deep.jpg';
import officeCleaningImage from './images/office.jpg';
import eventCleaningImage from './images/event.jpg';
import './stylesheets/style.css'

const services = [
    { id: 1, name: "Regular Cleaning", image: regularCleaningImage, description: "Maintain a clean and fresh home with our regular cleaning services." },
    { id: 2, name: "Kitchen Cleaning", image: kitchenCleaningImage, description: "Specialized cleaning for a hygienic and safe cooking environment." },
    { id: 3, name: "Glass Cleaning", image: glassCleaningImage, description: "Restore clarity to your windows, mirrors, and glass surfaces." },
    { id: 4, name: "Deep Cleaning", image: deepCleaningImage, description: "Revitalize your home with our deep cleaning service, leaving it sparkling clean and fresh." },
    { id: 5, name: "Office Cleaning", image: officeCleaningImage, description: "Promote employee well-being and productivity with a clean workspace." },
    { id: 6, name: "Special Event Cleaning", image: eventCleaningImage, description: "Seamless pre-event setup, post-event cleanup, and venue cleaning." }
];

function Portfolio() {
    return (
        <section id='portafolio' className="bg-light bg-img cover-background" data-overlay-dark="0"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="text-center mb-5 services-title" data-aos="fade-up">
                    <h5 className="text-primary h6">Our Services</h5>
                    <h2 className="display-20 display-md-18 display-lg-16">We offer many types of services</h2>
                </div>
                <div className="row justify-content-center">
                    {services.map(service => (
                        <div key={service.id} className="col-sm-6 col-lg-4 mb-1-9 cards" data-aos="fade-up">
                            <div className="card card-style1">
                                <div className="card-img">
                                    <img className="rounded-top" src={service.image} alt={service.name} />
                                </div>
                                <div className="card-body">
                                    <h3 className="h5">{service.name}</h3>
                                    <p className="display-30">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
