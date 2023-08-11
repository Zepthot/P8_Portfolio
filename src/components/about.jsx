import '../styles/about.scss';

// About function for the first section of the page
function About() {
    return(
        <section className="about-section">
            {/* Double title container */}
            <div className='about-title-container'>
                <h2 className='about-title'>Présentation<span className='about-back-title'>Qui suis-je ?</span></h2>
            </div>
            {/* Split line */}
            <div className='about-line'></div>
            {/* About container with strong key words */}
            <div className='about-text-container'>
                <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </section>
    )
}

//Export to use it elsewhere
export default About