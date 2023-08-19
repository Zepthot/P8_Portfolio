import '../styles/header.scss';
import { useState } from 'react';
import logo from '../assets/logo.webp';
import flagfr from '../assets/flag-fr.webp';
import flagen from '../assets/flag-en.webp';


// Header function for page header
function Header() {
    // Home button
    const removeClass = () => {
        setAboutActive(false);
        setPortfilioActive(false);
        setSkillsActive(false);
        setContactActive(false);
    }
    // Nav list states
    const [isAboutActive, setAboutActive] = useState(false);
    const [isPortfolioActive, setPortfilioActive] = useState(false);
    const [isSkillsActive, setSkillsActive] = useState(false);
    const [isContactActive, setContactActive] = useState(false);
    // About active function
    function toggleAboutClass() {
        setAboutActive(true);
        setPortfilioActive(false);
        setSkillsActive(false);
        setContactActive(false);
    }
    // Portfolio active function
    function togglePortClass() {
        setAboutActive(false);
        setPortfilioActive(true);
        setSkillsActive(false);
        setContactActive(false);
    }
    // Skills active function
    function toggleSkillsClass() {
        setAboutActive(false);
        setPortfilioActive(false);
        setSkillsActive(true);
        setContactActive(false);
    }
    // Contact active function
    function toggleContactClass() {
        setAboutActive(false);
        setPortfilioActive(false);
        setSkillsActive(false);
        setContactActive(true);
    }
    // Language state
    const [isEnglish, setEnglish] = useState(false);
    // Language function
    function toggleLanguage() {
        setEnglish(!isEnglish);
    };

    function toggleMenu() {
        const nav = document.getElementById("navbar-responsive");
        if (nav.className === "navbar") {
            nav.className += " responsive";
        } else {
            nav.className = "navbar";
        }
    };

    return (
        <header className='header-component'>
            {/* Logo home */}
            <a href='#home'><img src={logo} alt='Logo_YP' className='logo' onClick={removeClass} /></a>
            {/* top bar menu */}
            <nav id='navbar-responsive' className='navbar'>
                <ul>
                    <li><a href='#about' onClick={toggleAboutClass} className={isAboutActive? 'links active' : 'links'}>Présentation</a></li>
                    <li><a href='#portfolio' onClick={togglePortClass} className={isPortfolioActive? 'links active' : 'links'}>Portfolio</a></li>
                    <li><a href='#skills' onClick={toggleSkillsClass} className={isSkillsActive? 'links active' : 'links'}>Compétences</a></li>
                    <li><a href='#contact' onClick={toggleContactClass} className={isContactActive? 'links active' : 'links'}>Contact</a></li>
                    <li><a href='./CV.pdf' download className='links'>CV</a></li>
                </ul>
            </nav>
            {/* Language button */}
            <button className='button-flags' onClick={toggleLanguage}>
                {isEnglish ? <img src={flagen} alt='English flag' className='flags' /> : <img src={flagfr} alt='Drapeau français' className='flags' />}
            </button>
            <button className='icon-menu' onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </button>
        </header>
    )
}

// Export to use it elsewhere
export default Header