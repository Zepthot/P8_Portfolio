import '../styles/about.scss';
import Titles from './titles';
import Line from './title-line';

// About function for the first section of the page
function About() {
    return (
        <section id='about' className="about-section">
            {/* Call Title component with 2 props */}
            <Titles title='Présentation' btitle='Qui suis-je ?' />
            {/* Split line */}
            <Line />
            {/* About container with strong key words */}
            <div className='about-text-container'>
                <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </section>
    )
}

// Export to use it elsewhere
export default About