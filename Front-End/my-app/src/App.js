// src/App.js
import React from 'react';
import Wrap from './Wrap';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';

function App() {
    return (
        <>
            <Wrap />
            <NavBar />
            <HeroSection />
            {/* Other components like Home, About, etc. */}
            <Footer />
            
        </>
    );
}

export default App;
