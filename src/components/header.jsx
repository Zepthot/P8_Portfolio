import '../styles/header.scss';
import { useState } from 'react';
import logo from '../assets/logo.webp';
import flagfr from '../assets/flag-fr.webp';
import flagen from '../assets/flag-en.webp';
import { useTranslation } from 'react-i18next';

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
    const [isEnglish, setEnglish] = useState('fr');
    // Translation language function
    const {i18n} = useTranslation();

    function handleLanguageChange() {
        if (isEnglish === 'fr') {
            setEnglish('en');
            i18n.changeLanguage('en');
            document.title = "Web Developer - Yoann POULARD-THEUIL";
            document.documentElement.lang = "en";
        } else {
            setEnglish('fr');
            i18n.changeLanguage('fr');
            document.title = "Développeur web - Yoann POULARD-THEUIL";
            document.documentElement.lang = "fr";
        }
    };
    // Responsive menu button function
    function toggleMenu() {
        const nav = document.getElementById("navbar-responsive");
        if (nav.className === "navbar") {
            nav.className += " responsive";
        } else {
            nav.className = "navbar";
        }
    };
    //
    const {t} = useTranslation();    

    return (
        <header className='header-component'>
            {/* Logo home */}
            <a href='#home'><img src={logo} alt='Logo_YP' className='logo' onClick={removeClass} /></a>
            {/* top bar menu */}
            <nav id='navbar-responsive' className='navbar'>
                <ul>
                    <li><a href='#about' onClick={toggleAboutClass} className={isAboutActive? 'links active' : 'links'}>{t('header-title.about')}</a></li>
                    <li><a href='#portfolio' onClick={togglePortClass} className={isPortfolioActive? 'links active' : 'links'}>{t('header-title.portfolio')}</a></li>
                    <li><a href='#skills' onClick={toggleSkillsClass} className={isSkillsActive? 'links active' : 'links'}>{t('header-title.skills')}</a></li>
                    <li><a href='#contact' onClick={toggleContactClass} className={isContactActive? 'links active' : 'links'}>{t('header-title.contact')}</a></li>
                    <li><a href={isEnglish === 'en' ? './Resume_POULARD-THEUIL_Yoann_Web_developer.pdf' : './CV_POULARD-THEUIL_Yoann_Developpeur_web.pdf'} download className='links'>{t('header-title.resume')}</a></li>
                </ul>
            </nav>
            {/* Language button */}
            <button className='button-flags' onClick={handleLanguageChange}>
                {isEnglish === 'en' ? <img src={flagfr} alt='Drapeau français' className='flags' /> : <img src={flagen} alt='English flag' className='flags' />}
            </button>
            {/* Responsive menu button */}
            <button className='icon-menu' onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </button>
        </header>
    )
}

// Export to use it elsewhere
export default Header