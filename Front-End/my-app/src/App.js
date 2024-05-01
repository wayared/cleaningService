// src/App.js
import React from 'react';
import Wrap from './Wrap';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
    return (
        <>
            <Wrap />
            <NavBar />
            {/* Other components like Home, About, etc. */}
            <Footer />
            
        </>
    );
}

export default App;
