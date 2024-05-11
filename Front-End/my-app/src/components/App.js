// src/App.js
import React from 'react';
import Wrap from './Wrap';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Introduce from './Introduce' 
import Portfolio from './Portfolio'
import WhyChooseUs from './Why';
import Notification from './Notification';
import Contact from './Contact';
import Services from '../Services';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>      
            <Router>
            <Notification />
            <Wrap />
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <Introduce />
                        <Portfolio />
                        <WhyChooseUs />
                        {/* Otros componentes que desees mostrar en la página principal */}
                    </>
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                {/* Agrega más rutas según sea necesario */}
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
