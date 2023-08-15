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
                <p>Je suis devenu <strong>Développeur Web full-stack</strong> suite à une reconversion professionnelle effectué avec OpenClassrooms. En seulement 5 mois, j'ai pu me familiariser avec les pratiques du web à travers <strong>7 projets professionnalisants</strong> que vous pouvez retrouver ci-dessous. </p>
                <p>Étant autodidacte, j'aime réaliser de petits projets personnels pour pratiquer mes nouvelles connaissances. C'est pourquoi OpenClassrooms a été la solution idéale pour apprendre. De nature curieux et perfectionniste, je reste dans l'optique de <strong>toujours m'améliorer</strong>, aussi bien mes compétences techniques que sociales.</p>
            </div>
        </section>
    )
}

// Export to use it elsewhere
export default About