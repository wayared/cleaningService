import React from 'react';
import logo from './images/logo1.png'; // Make sure the path is correct
import nextdoorIcon from './images/nextdoor.png'; // Make sure the path is correct
import './stylesheets/style.css'
import backgroundImage from './images/tools.png'


function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <footer className="pt-16 pt-lg-20 pt-xl-24 bg-img cover-background theme-overlay-dark footer" 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
                        <div className="mb-1-6">
                            <img id="logo" src={logo} alt="logo" />
                        </div>
                        <p className="display-30 text-white mb-1-6">
                            Different kinds and sizes of edifices experiences on cleaning region with effective undertaking on going.
                        </p>
                        <ul className="footer-social-icon"  data-aos="fade-up">
                            <li><a href="https://www.facebook.com/profile.php?id=61555800778231"><i className="fa fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/mc_dreamcleaning/"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://nextdoor.com/pages/mc-dream-cleaning-portland-or/?init_source=org_pages&utm_source=share&utm_campaign=1715493453309"><img id="nextdoor" src={nextdoorIcon} alt="Nextdoor" /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-2-5 mb-lg-0"  data-aos="fade-up">
                        <div className="pl-lg-1-6">
                            <h3 className="text-primary h5 mb-1-6 ourfooter">Our Services</h3>
                            <ul className="footer-list">
                                <li><a href="#portafolio"><span className="fa fa-arrow-right text-primary mr-2 align-middle"></span>House Cleaning</a></li>
                                <li><a href="#portafolio"><span className="fa fa-arrow-right text-primary mr-2 align-middle"></span>Glass Cleaning</a></li>
                                <li><a href="#portafolio"><span className="fa fa-arrow-right text-primary mr-2 align-middle"></span>Toilet Cleaning</a></li>
                                <li><a href="#portafolio"><span className="fa fa-arrow-right text-primary mr-2 align-middle"></span>Office Cleaning</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-primary h5 mb-1-6 contact"  data-aos="fade-up">Contact Us</h3>
                        <div className="footer-contact-info">
                            <div className="box"  data-aos="fade-up">
                                <a href="tel:+19714270026" className="text-white estimate">
                                    <span className="icon"><i className="fa fa-mobile"></i></span>
                                    Get Free Estimate +1 (971) 427-0026
                                </a>
                            </div>
                            <div className="box" style={{ marginTop: "20px" }}  data-aos="fade-up">
                                <a href="mailto:mcdrcleaning@gmail.com" className="text-white estimate">
                                    <span className="icon"><i className="fa fa-envelope"></i></span>
                                    mcdrcleaning@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom py-4 mt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="text-white opacity9 mb-0 display-31 letter-spacing-2 text-uppercase">
                                    © {currentYear} MC Dream Cleaning 
                                </p>
                                <p>Web Created and Designed by <a href="https://www.linkedin.com/in/jared-castillo-6383a5239" className="white-hover" target="_blank">Jared Castillo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
