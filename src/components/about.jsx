import '../styles/about.scss';
import Titles from './titles';
import Line from './title-line';
import { useTranslation } from 'react-i18next';

// About function for the first section of the page
function About() {
    // Translation function
    const {t} = useTranslation();

    return (
        <section id='about' className="about-section">
            {/* Call Title component with 2 props */}
            <Titles title={t('about.title')} btitle={t('about.backtitle')} />
            {/* Split line */}
            <Line />
            {/* About container with strong key words */}
            <div className='about-text-container'>
                <p>{t('about.paragraph1.first')}<strong>{t('about.paragraph1.second')}</strong>{t('about.paragraph1.third')}<strong>{t('about.paragraph1.fourth')}</strong>{t('about.paragraph1.fifth')}</p>
                <p>{t('about.paragraph2.first')}<strong>{t('about.paragraph2.second')}</strong>{t('about.paragraph2.third')}</p>
            </div>
        </section>
    )
}

// Export to use it elsewhere
export default About