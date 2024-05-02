import React, { useState, useEffect } from 'react';
import logo from './images/logo1.png';  // Ensure the path to your images is correct
import './style.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hidden, setHidden] = useState(false);  // State to handle hiding the navbar

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop && currentScroll > 100) { // Scrolls down & more than 100px from the top
                setHidden(true);
            } else if (currentScroll <= 0) {  // Reached the top of the page
                setHidden(false);
            }
            // No need to change hidden state while scrolling up unless it's back to the top
            lastScrollTop = currentScroll;  // Update lastScrollTop to current scroll position
        };

        let lastScrollTop = 0;  // Variable to store the last scroll position
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ftco_navbar ftco-navbar-light ${hidden ? 'hide' : ''}`} id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand ml-auto" href="index.html">
                    <img src={logo} alt="Cleaning Company Logo" id="navbar-logo" />
                </a>
                <button className="navbar-toggler" onClick={toggleNavbar} aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className={`${isExpanded ? 'show' : ''} collapse navbar-collapse`} id="ftco-nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active"><Link to="/app" className="nav-link">Home</Link></li>
                        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
                        {/*<li className="nav-item"><a href="gallery.html" className="nav-link">Portfolio</a></li>*/}
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
