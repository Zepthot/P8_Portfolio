import React from 'react';
import About from '../../components/about';
import Portfolio from '../../components/portfolio';

// Core function with all sections
function Core() {
    return (
        <React.StrictMode>
            <About />
            <Portfolio />
        </React.StrictMode>
    )
}

// Export to call it up in index.js
export default Core