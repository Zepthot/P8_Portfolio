import '../styles/intro.scss';
import Line from './title-line';
import ParticlesBackground from './particles'; 
import { useTranslation } from 'react-i18next';

// Intro function
function Intro () {
    // Translation function
    const {t} = useTranslation();

    return (
        <div id='home' className='intro-div'>
            <ParticlesBackground />
            <div className='title-container'>
                <h1 className='title'>Yoann<span className='back-title'>POULARD-THEUIL</span></h1>
             </div>
            {/* Split line */}
            <Line />
            {/* Sub title */}
            <p>{t('intro.job')}</p>
        </div>
    )
}

// Export to use it elsewhere
export default Intro