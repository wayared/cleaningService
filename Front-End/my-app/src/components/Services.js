import React, { useState, useEffect, useCallback, useRef } from 'react';
import './stylesheets/services.css'; // Ensure your CSS styles are set up correctly
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
            description: "Our Deep Cleaning service goes beyond regular cleaning to tackle hard-to-reach areas and stubborn dirt. We thoroughly clean every corner of your home, leaving it refreshed and revitalized.",
            images: [deep1,deep2,deep3]
        },
        service2: {
            name: "Regular Cleaning",
            description: "Our Regular Cleaning service ensures that your home stays tidy and spotless on a consistent basis. We cover all essential cleaning tasks, including dusting, vacuuming, mopping, and sanitizing, so you can enjoy a clean and comfortable living space.",
            images: [regular1,regular2,regular3]
        },
        service3: {
            name: "Kitchen Cleaning",
            description: "Our Kitchen Cleaning service focuses on keeping your kitchen hygienic and shining. We clean countertops, appliances, cabinets, and floors, ensuring a fresh and inviting environment for cooking and dining.",
            images: [kitchen1,kitchen2,kitchen3]
        },
        service4: {
            name: "Glass Cleaning",
            description: "Our Glass Cleaning service makes sure your windows, mirrors, and glass surfaces are crystal clear and streak-free, enhancing the beauty of your home with sparkling reflections.",
            images: [glass1,glass2,glass3]
        },
        service5: {
            name: "Office Cleaning",
            description: "Our Office Cleaning service creates a clean and productive workspace by meticulously cleaning desks, floors, and common areas, ensuring a professional and welcoming environment for employees and visitors.",
            images: [office1,office2,office3]
        },
        service6: {
            name: "Special event cleaning",
            description: "Our Special Event Cleaning service helps you prepare for or clean up after events, ensuring your venue is immaculate. We handle everything from setup to breakdown, so you can focus on enjoying your event.",
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
