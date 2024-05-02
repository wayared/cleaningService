import React, {useState} from 'react';
import './services.css'; // Ensure your CSS styles are set up correctly


const Services = () => {
    const [activeTab, setActiveTab] = useState('service1');

    const servicesData = {
        service1: {
            name: "Plumbing Leak",
            description: "Details about Plumbing Leak...",
            images: ["assets/images/service-slider/01.jpg"]
        },
        service2: {
            name: "Bathroom Plumbing",
            description: "Details about Bathroom Plumbing...",
            images: ["assets/images/service-slider/02.jpg"]
        },
        service3: {
            name: "Kitchen Plumbing",
            description: "Details about Kitchen Plumbing...",
            images: ["assets/images/service-slider/03.jpg"]
        },
        service4: {
            name: "Broken Fixture",
            description: "Details about Broken Fixture...",
            images: ["assets/images/service-slider/04.jpg"]
        },
        service5: {
            name: "Drain Clogs",
            description: "Details about Drain Clogs...",
            images: ["assets/images/service-slider/05.jpg"]
        },
        service6: {
            name: "Broken Toilet",
            description: "Details about Broken Toilet...",
            images: ["assets/images/service-slider/06.jpg"]
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {Object.keys(servicesData).map((key) => (
                            <button
                                key={key}
                                className={`nav-link ${activeTab === key ? 'active' : ''}`}
                                onClick={() => handleTabClick(key)}
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
                        {servicesData[activeTab].images.map((image, index) => (
                            <img key={index} src={image} alt={servicesData[activeTab].name} className="img-fluid rounded-4" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

