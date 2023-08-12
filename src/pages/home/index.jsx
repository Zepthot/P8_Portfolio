import React from 'react';
import About from '../../components/about';
import Portfolio from '../../components/portfolio';
import Skills from '../../components/skills';
import Contact from '../../components/contact';

// Core function with all sections
function Core() {
    return (
        <React.StrictMode>
            <About />
            <Portfolio />
            <Skills />
            <Contact />
        </React.StrictMode>
    )
}

// Export to call it up in index.js
export default Core