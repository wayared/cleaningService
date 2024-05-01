import React from 'react';
import backgroundImage from './images/bubbles.jpg'; // Make sure the path is correct
import regularCleaningImage from './images/regular.jpg'; // Adjust the path as necessary
import kitchenCleaningImage from './images/kitchen.jpg';
import glassCleaningImage from './images/glass.jpg';
import deepCleaningImage from './images/deep.jpg';
import officeCleaningImage from './images/office.jpg';
import eventCleaningImage from './images/event.jpg';

const services = [
    { id: 1, name: "Regular Cleaning", image: regularCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." },
    { id: 2, name: "Kitchen Cleaning", image: kitchenCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." },
    { id: 3, name: "Glass Cleaning", image: glassCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." },
    { id: 4, name: "Deep Cleaning", image: deepCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." },
    { id: 5, name: "Office Cleaning", image: officeCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." },
    { id: 6, name: "Special Event Cleaning", image: eventCleaningImage, description: "We are already high standards to have you see us as the absolute best in the industry." }
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
                                    <h3 className="h5"><a href="#!">{service.name}</a></h3>
                                    <p className="display-30">{service.description}</p>
                                    <a href="#!" className="read-more">read more</a>
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
