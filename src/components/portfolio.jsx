import '../styles/portfolio.scss';
import Titles from './titles';
import Line from './title-line';
import Gallery from './gallery';
import { useTranslation } from 'react-i18next';

// Portfolio function for the second section of the page
function Portfolio() {
    // Translation function
    const {t} = useTranslation();

    return (
        <section id='portfolio' className='portfolio-section'>
            {/* Call Title component with 2 props */}
            <Titles title={t('portfolio.title')} btitle={t('portfolio.backtitle')} />
            {/* Split line */}
            <Line />
            <Gallery />
        </section>
    )
}

// Export to use it elsewhere
export default Portfolio