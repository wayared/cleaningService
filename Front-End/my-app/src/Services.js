import React, {useState,useEffect} from 'react';
import './services.css'; // Ensure your CSS styles are set up correctly
import backgroundImage from './images/house.jpg'; // Make sure the path is correct
import house1 from './images/house.jpg';
import house2 from './images/house2.jpg';

const Services = () => {
    const [activeTab, setActiveTab] = useState('service1');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const servicesData = {
        service1: {
            name: "Deep Cleaning",
            description: "Details about Plumbing Leak...",
            images: [house1,house2]
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

    // Handle clicking on a tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentImageIndex(0); // Reset image index on tab change
    };

    // Setup effect for automatic image rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => {
                return (prevIndex + 1) % servicesData[activeTab].images.length; // Ensure the index wraps around
            });
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(timer); // Clean up the interval on unmount
    }, [activeTab, servicesData]); // Depend on activeTab and servicesData for changes


    
    return (
        <section id="services" className="ftco-section ftco-no-pt ftco-no-pb" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                        <div>
                            <img
                                src={servicesData[activeTab].images[currentImageIndex]}
                                alt={servicesData[activeTab].name}
                                className="img-fluid rounded-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

