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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>      
            <Router>
            <Notification />
            <Wrap />
            <NavBar />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/why" element={<WhyChooseUs />} />
                <Route path="/contact" element={<Contact />} />
                {/* Agrega rutas adicionales aquí */}
            </Routes>
            <Footer />
        </Router>
        </>
    );
}

export default App;
