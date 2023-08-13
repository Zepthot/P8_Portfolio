import '../styles/footer.scss';
import gitimage from '../assets/social-media/github.webp';
import linkedimage from '../assets/social-media/linkedin.webp';

// Footer function for page footer
function Footer() {
    return (
        <footer className='footer-component'>
            <div>
                <a href='https://github.com/Zepthot' target='_blank'><img src={gitimage} alt='Logo Github' className='footer-logo' /></a>
                <a href='https://www.linkedin.com/in/yoann-poulard-theuil/' target='_blank'><img src={linkedimage} alt='Logo LinkedIn' className='footer-logo' /></a>
            </div>
            <p className='footer-name'>Yoann POULARD-THEUIL</p>
        </footer>
    )
}

// Export to use it elsewhere
export default Footer