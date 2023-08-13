import '../styles/portfolio.scss';
import Titles from './titles';
import Line from './title-line';
import Gallery from './gallery';

// Fetch categories from category file
const res = await fetch('./category.json');
let catList = await res.json();

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
                    {/* Add dynamic filters */}
                    {catList.map((category) => {
                        return (
                            <li key={category.id}><button>{category.name}</button></li>
                        )
                    })}
                </ul>
            </div>
            <Gallery />
        </section>
    )
}

// Export to use it elsewhere
export default Portfolio