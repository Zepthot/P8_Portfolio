import '../styles/header.scss';
import logo from '../assets/opti/logo.webp';
import flagfr from '../assets/opti/flag-fr.webp';

function Header() {
    return (
        <header className='header-component'>
            {/* Logo home */}
            <a href='#home'><img src={logo} alt='Logo_YP' className='logo' /></a>
            {/* top bar menu */}
            <nav>
                <ul>
                    <li><a href='#about'>Présentation</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#skills'>Compétences</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#cv'>CV</a></li>
                </ul>
            </nav>
            {/* Language logo */}
            <img src={flagfr} alt='Drapeau français' className='flags'/>
        </header>
    )
}

export default Header