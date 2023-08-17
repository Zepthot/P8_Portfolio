import '../styles/header.scss';
import logo from '../assets/logo.webp';
import flagfr from '../assets/flag-fr.webp';
import flagen from '../assets/flag-fr.webp';

// Header function for page header
function Header() {
    function handleClick() {
        console.log("Language button");
      };

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
                    <li><a href='./CV.pdf' download>CV</a></li>
                </ul>
            </nav>
            {/* Language button */}
            <button className='button-flags' onClick={handleClick}>
                <img src={flagfr} alt='Drapeau français' className='flags'/>
            </button>
        </header>
    )
}

// Export to use it elsewhere
export default Header