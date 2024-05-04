import React, { useState, useEffect, useCallback, useRef } from 'react';
import './services.css'; // Ensure your CSS styles are set up correctly
import deep1 from './images/deep1.jpg';
import deep2 from './images/deep2.jpg';
import deep3 from './images/deep3.jpg';
import regular1 from './images/regular1.jpg';
import regular2 from './images/regular2.jpg';
import regular3 from './images/regular3.jpg';
import kitchen1 from './images/kitchen1.jpg';
import kitchen2 from './images/kitchen2.jpg';
import kitchen3 from './images/kitchen3.jpg';
import glass1 from './images/glass1.jpg';
import glass2 from './images/glass2.jpg';
import glass3 from './images/glass3.jpg';
import office1 from './images/office1.jpg';
import office2 from './images/office2.jpg';
import office3 from './images/office3.jpg';
import event4 from './images/event4.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';
import videoSource from './images/background.mp4'; // Adjust the path as necessary
const Services = () => {
    const [activeTab, setActiveTab] = useState('service1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('left');
    const sliderRef = useRef(null);

    const servicesData = {
        service1: {
            name: "Deep Cleaning",
            description: "Experience a thorough clean that goes beyond the surface. Our deep cleaning service targets hard-to-reach areas and tackles stubborn dirt and grime. Ideal for preparing your space for special events or for a comprehensive seasonal cleaning, this service ensures every corner of your home or office shines. We use eco-friendly products and advanced techniques to deliver outstanding results.",
            images: [deep1,deep2,deep3]
        },
        service2: {
            name: "Regular Cleaning",
            description: "Details about Bathroom Plumbing...",
            images: [regular1,regular2,regular3]
        },
        service3: {
            name: "Kitchen Cleaning",
            description: "Details about Kitchen Plumbing...",
            images: [kitchen1,kitchen2,kitchen3]
        },
        service4: {
            name: "Glass Cleaning",
            description: "Details about Broken Fixture...",
            images: [glass1,glass2,glass3]
        },
        service5: {
            name: "Office Cleaning",
            description: "Details about Drain Clogs...",
            images: [office1,office2,office3]
        },
        service6: {
            name: "Special event cleaning",
            description: "Details about Broken Toilet...",
            images: [event4,event2,event3]
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideDirection('left');
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % servicesData[activeTab].images.length
            );
        }, 4000); // Changes every 4 seconds

        return () => clearInterval(timer);
    }, [activeTab, servicesData]);

    const handlePrevImage = () => {
        setSlideDirection('right');
        setCurrentImageIndex(prevIndex => 
            prevIndex === 0 ? servicesData[activeTab].images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setSlideDirection('left');
        setCurrentImageIndex(prevIndex => 
            (prevIndex + 1) % servicesData[activeTab].images.length
        );
    };

    return (
        <section id="services">
            <div className="video-background">
                <video autoPlay loop muted playsInline id="video1">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="nav flex-column nav-pills">
                        {Object.keys(servicesData).map(key => (
                            <button key={key} className={`nav-link ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>
                                {servicesData[key].name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-lg-9">
                    <h2>Service that we provide</h2>
                    <p>{servicesData[activeTab].description}</p>
                    <div className="image-slider" ref={sliderRef}>
                        <button className="control-btn left" onClick={handlePrevImage}><i className="fa fa-chevron-left"></i></button>
                        <img
                            src={servicesData[activeTab].images[currentImageIndex]}
                            alt={servicesData[activeTab].name}
                            className={`img-fluid rounded-4 slide-${slideDirection}`}
                        />
                        <button className="control-btn right" onClick={handleNextImage}><i className="fa fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services;
