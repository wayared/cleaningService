// src/components/Navbar.js
import React from 'react';
import logo from './images/logo1.png';  // Ensure the path to your images is correct
import './style.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand ml-auto" href="index.html"><img src={logo} alt="Cleaning Company Logo" id="navbar-logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="portfolio.html" className="nav-link">Portfolio</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
