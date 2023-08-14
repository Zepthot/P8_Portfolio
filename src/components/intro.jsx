import '../styles/intro.scss';
import Titles from './titles';
import Line from './title-line';

// Intro function
function Intro () {
    return (
        <div id='home' className='intro-div'>
            {/* Call Title component with 2 props */}
            <Titles title='Yoann' btitle='POULARD-THEUIL' />
            {/* Split line */}
            <Line />
            {/* Sub title */}
            <p>Développeur Web</p>
        </div>
    )
}

// Export to use it elsewhere
export default Intro