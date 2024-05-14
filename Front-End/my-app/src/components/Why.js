import React from 'react';
import backgroundImage from './images/bubbles.jpg'; // Ensure the path is correct
import about06 from './images/about-06.jpg';
import about02 from './images/about-02.jpg';
import about03 from './images/about-03.jpg';
import about07 from './images/about-07.jpg';
import './stylesheets/style.css'

function WhyChooseUs() {
    return (
        <section className="bg-light bg-img cover-background why" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-md-7 mb-lg-0">
                        <div className="mb-3" data-aos="fade-up">
                            <h5 className="text-primary h6">Why Choose Us</h5>
                            <h2 className="display-20 display-md-18 display-lg-16 mb-1-6">We will make any place neat & clean.</h2>
                        </div>
                        <p className="mb-2-6">Choose McDream Cleaning for expert cleaning services that guarantee exceptional results. Our commitment to quality and customer satisfaction sets us apart.</p>
                        <div className="media mb-2-6" data-aos="fade-up">
                            <div className="media-body">
                                <h4 className="h5">We are experts</h4>
                                <p className="display-30 mb-0">With our skilled team and attention to detail, we deliver superior cleaning results that exceed expectations.</p>
                            </div>
                        </div>
                        <div className="media mb-2-6" data-aos="fade-up">
                            <div className="media-body">
                                <h4 className="h5">We are committed</h4>
                                <p className="display-30 mb-0">Our dedication shines through in every cleaning job we undertake, ensuring your satisfaction and a pristine space.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 text-center">
                        <div className="pl-lg-8">
                            <div className="row">
                                <div className="col-6 mt-5">
                                    <div className="mb-1-9 hoverstyle1" data-aos="fade-up">
                                        <img src={about06} className="rounded" alt="..." />
                                    </div>
                                    <div className="hoverstyle1" data-aos="fade-up">
                                        <img src={about02} className="rounded" alt="..." />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-1-9 hoverstyle1" data-aos="fade-up">
                                        <img src={about03} className="rounded" alt="..." />
                                    </div>
                                    <div className="hoverstyle1" data-aos="fade-up">
                                        <img src={about07} className="rounded" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
