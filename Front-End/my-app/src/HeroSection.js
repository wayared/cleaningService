import React from 'react';
import videoSource from './images/introduce.mp4'; // Adjust the path as necessary
import './style.css'

function HeroSection() {
    return (
        <div className="hero-wrap js-fullheight" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="video-background">
                <video autoPlay loop muted playsInline id="video1">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="overlay"></div>
            <div className="container" id="container-text">
                <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                    <div className="col-md-6 ftco-animate">
                        <h2 className="subheading">Pure Clean, Pure Comfort</h2>
                        <h1 className="mb-4">Transform Your Space with Our Eco-Friendly Cleaning Solutions</h1>
                        <p>
                            <a href="#introduce" className="btn btn-primary mr-md-4 py-2 px-4">
                                Contact us<span className="ion-ios-arrow-forward"></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
