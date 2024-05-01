// src/App.js
import React from 'react';
import Wrap from './Wrap';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Introduce from './Introduce' 
import Portfolio from './Portfolio'

function App() {
    return (
        <>
            <Wrap />
            <NavBar />
            <HeroSection />
            <Introduce />
            <Portfolio />
            {/* Other components like Home, About, etc. */}
            <Footer />
            
        </>
    );
}

export default App;
