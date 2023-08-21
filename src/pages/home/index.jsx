import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '../../components/about';
import Portfolio from '../../components/portfolio';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import Intro from '../../components/intro';

// Core function with all sections
function Core() {
    const { i18n } = useTranslation();
    // Setup the application on FR
    useEffect(() => {
        i18n.changeLanguage('fr');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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