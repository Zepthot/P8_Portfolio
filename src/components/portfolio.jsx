import '../styles/portfolio.scss';
import Titles from './titles';
import Line from './title-line';

// Portfolio function for the second section of the page
function Portfolio() {
    return (
        <section id='portfolio' className='portfolio-section'>
            {/* Call Title component with 2 props */}
            <Titles title='Portfolio' btitle='Mes Réalisations' />
            {/* Split line */}
            <Line />
            <div className='filters'>
                <ul>
                    <li><button className='button-active'>All</button></li>
                    <li><button>OpenClassrooms</button></li>
                    <li><button>Personnal</button></li>
                </ul>
            </div>
        </section>
    )
}

// Export to use it elsewhere
export default Portfolio