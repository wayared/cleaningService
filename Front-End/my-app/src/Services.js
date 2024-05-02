import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure your CSS styles are set up correctly
import backgroundImage from './images/house.jpg'; // Make sure the path is correct

const servicesData = {
    service1: {
        name: "Plumbing Leak",
        description: "Detailed description for Plumbing Leak...",
        images: ["path_to_leak_image1.jpg", "path_to_leak_image2.jpg"]
    },
    service2: {
        name: "Bathroom Plumbing",
        description: "Details about Bathroom Plumbing...",
        images: ["path_to_bathroom_image1.jpg", "path_to_bathroom_image2.jpg"]
    },
    // Add other services similarly
};

function Services() {
    const [activeService, setActiveService] = useState('service1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleImageChange();
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [activeService]);

    const handleImageChange = () => {
        const images = servicesData[activeService].images;
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handleServiceChange = (serviceId) => {
        setActiveService(serviceId);
        setCurrentImageIndex(0); // Reset image index on service change
    };

    return (
        <section id="services" className="ftco-section ftco-no-pt ftco-no-pb" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
            <div className="row g-4 g-xl-5">
                <div className="col-lg-3 align-self-start">
                    <ul className="nav nav-tabs nav-tabs-border flex-lg-column d-flex">
                        {Object.keys(servicesData).map(serviceId => (
                            <li key={serviceId} className="nav-item">
                                <button
                                    className={`nav-link ${activeService === serviceId ? 'active' : ''}`}
                                    onClick={() => handleServiceChange(serviceId)}
                                >
                                    {servicesData[serviceId].name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-9">
                    <h2>Service that we provide</h2>
                    <p>{servicesData[activeService].description}</p>
                    <img
                        src={servicesData[activeService].images[currentImageIndex]}
                        alt={servicesData[activeService].name}
                        className="service-image rounded-4"
                    />
                </div>
            </div>
        </div>
        </section>
    );
}

export default Services;
