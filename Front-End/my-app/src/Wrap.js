// src/components/Wrap.js
import React from 'react';
import nextdoorIcon from '../images/nextdoor.png';  // Ensure the path to your images is correct

function Wrap() {
    return (
        <div className="wrap">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md d-flex align-items-center">
                        <p className="mb-0 phone">
                            <span className="mailus">Phone no:</span> <a href="tel:+19714270026">+1 (971) 427-0026</a> or
                            <span className="mailus">email us:</span> <a href="mailto:mcdrcleaning@gmail.com">mcdrcleaning@gmail.com</a>
                        </p>
                    </div>
                    <div className="col-12 col-md d-flex justify-content-md-end">
                        <div className="social-media">
                            <p className="mb-0 d-flex">
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><img id="nextdoor" src={nextdoorIcon} alt="Nextdoor" /></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrap;
