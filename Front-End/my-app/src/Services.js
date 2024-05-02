import React, { useState, useEffect, useCallback } from 'react';
import './services.css'; // Ensure your CSS styles are set up correctly
import house1 from './images/house.jpg';
import house2 from './images/house2.jpg';
import backgroundImage from './images/house.jpg'; // Make sure the path is correct
const Services = () => {
    const [activeTab, setActiveTab] = useState('service1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState('next'); // to control the direction of the transition

    const servicesData = {
        service1: {
            name: "Deep Cleaning",
            description: "Details about Plumbing Leak...",
            images: [house1, house2]
        },
        service2: {
            name: "Regular Cleaning",
            description: "Details about Bathroom Plumbing...",
            images: ["./images/cleaning1.jpg", './images/cleaning2.jpg']
        },
        service3: {
            name: "Kitchen Cleaning",
            description: "Details about Kitchen Plumbing...",
            images: ["assets/images/service-slider/03.jpg"]
        },
        service4: {
            name: "Glass Cleaning",
            description: "Details about Broken Fixture...",
            images: ["assets/images/service-slider/04.jpg"]
        },
        service5: {
            name: "Office Cleaning",
            description: "Details about Drain Clogs...",
            images: ["assets/images/service-slider/05.jpg"]
        },
        service6: {
            name: "Special event cleaning",
            description: "Details about Broken Toilet...",
            images: ["assets/images/service-slider/06.jpg"]
        }
    };

    const handleNextImage = useCallback(() => {
        setTransitionDirection('next');
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % servicesData[activeTab].images.length);
    }, [activeTab, servicesData]);

    const handlePrevImage = useCallback(() => {
        setTransitionDirection('prev');
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + servicesData[activeTab].images.length) % servicesData[activeTab].images.length);
    }, [activeTab, servicesData]);

    useEffect(() => {
        const timer = setInterval(handleNextImage, 5000);
        return () => clearInterval(timer);
    }, [handleNextImage]);

    return (
        <section id="services" className="ftco-section ftco-no-pt ftco-no-pb" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="nav flex-column nav-pills">
                            {Object.keys(servicesData).map((key) => (
                                <button
                                    key={key}
                                    className={`nav-link ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    {servicesData[key].name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h2>Service that we provide</h2>
                        <p>{servicesData[activeTab].description}</p>
                        <div className="image-slider">
                            <button className="control-btn left" onClick={handlePrevImage}>&lt;</button>
                            <img
                                src={servicesData[activeTab].images[currentImageIndex]}
                                alt={servicesData[activeTab].name}
                                className="img-fluid rounded-4"
                            />
                            <button className="control-btn right" onClick={handleNextImage}>&gt;</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
