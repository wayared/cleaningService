import React from 'react';
import './stylesheets/about.css'; // Import the CSS file
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
                    At McDream Cleaning, our mission is to provide exceptional cleaning services that transform your space into a pristine oasis. We are dedicated to exceeding your expectations by delivering meticulous cleaning using safe, effective methods and environmentally friendly products. Our goal is to enhance your quality of life by providing a clean and inviting home that you can truly relax and enjoy.
                    </p>
                    <h2>Why Choose Us?</h2>
                    <p>
                    Expertise: With years of experience, we deliver professional cleaning services tailored to your needs.<br></br>
Quality: We use top-of-the-line products and equipment to ensure a thorough and effective clean every time.<br></br>
Reliability: You can count on us to be punctual, reliable, and dedicated to delivering the best results.<br></br>
Customer Satisfaction: Your satisfaction is our priority, and we go above and beyond to exceed your expectations."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
