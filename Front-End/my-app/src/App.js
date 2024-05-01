// src/App.js
import React from 'react';
import Wrap from './Wrap';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Introduce from './Introduce' 

function App() {
    return (
        <>
            <Wrap />
            <NavBar />
            <HeroSection />
            <Introduce />
            {/* Other components like Home, About, etc. */}
            <Footer />
            
        </>
    );
}

export default App;
