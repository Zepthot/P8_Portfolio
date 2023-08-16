import '../styles/intro.scss';
import Line from './title-line';

// Intro function
function Intro () {
    return (
        <div id='home' className='intro-div'>
            <div className='title-container'>
                <h1 className='title'>Yoann<span className='back-title'>POULARD-THEUIL</span></h1>
             </div>
            {/* Split line */}
            <Line />
            {/* Sub title */}
            <p>Développeur Web</p>
        </div>
    )
}

// Export to use it elsewhere
export default Intro