import React from 'react';
import About from '../../components/about';
import Portfolio from '../../components/portfolio';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import Intro from '../../components/intro';

// Core function with all sections
function Core() {
    return (
        <React.StrictMode>
            <Intro />
            <About />
            <Portfolio />
            <Skills />
            <Contact />
        </React.StrictMode>
    )
}

// Export to call it up in index.js
export default Core