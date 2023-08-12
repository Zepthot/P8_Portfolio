import React from 'react';
import About from '../../components/about';
import Portfolio from '../../components/portfolio';
import Skills from '../../components/skills';

// Core function with all sections
function Core() {
    return (
        <React.StrictMode>
            <About />
            <Portfolio />
            <Skills />
        </React.StrictMode>
    )
}

// Export to call it up in index.js
export default Core