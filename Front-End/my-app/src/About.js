import React from 'react';
import './about.css'; // Import the CSS file
import backgroundImage from './images/house4.jpg'; // Path to your background image
import logoImage from './images/logo1.png'; // Path to your logo image

const About = () => {
    return (
        <section id="about" className="about-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="about-container">
                <div className="logo-container">
                    <img src={logoImage} alt="Logo" className="logo" />
                </div>
                <div className="about-content">
                    <p>
                        We are a leading cleaning service provider, dedicated to delivering high-quality cleaning solutions for homes and businesses. Our experienced team ensures every corner sparkles and every surface shines, creating a clean and healthy environment for our clients.
                    </p>
                    <h2>Mission</h2>
                    <p>
                        Our mission is to provide exceptional cleaning services that exceed our clients' expectations. We strive to achieve this through our commitment to quality, reliability, and eco-friendly practices.
                    </p>
                    <h2>Why Choose Us?</h2>
                    <p>
                        With years of experience and a dedication to customer satisfaction, we are the preferred choice for cleaning services. Our team is highly trained, fully insured, and committed to delivering superior results.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
