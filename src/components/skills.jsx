import '../styles/skills.scss';
import Titles from './titles';
import Line from './title-line';
import SkillBar from './skill-bar';

// Fetch data from data file and reverse order
const res = await fetch('./skills.json');
let skillList = await res.json();

// Skills function for the third section of the page
function Skills() {
    return (
        <section id='skills' className="skills-section">
            {/* Call Title component with 2 props */}
            <Titles title='Compétences' btitle='À votre service' />
            {/* Split line */}
            <Line />
            <div className='skills-container'>
                <article className='skills-soft'>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                </article>
                <article className='skills-hard'>
                    <ul>
                    {skillList.map((skill) => {
                        return (
                                <li key={skill.id}><SkillBar name={skill.name} value={skill.value} color={skill.color} logo={skill.logo} border={skill.border} alt={skill.logoalt} /></li>
                        )
                    })}
                    </ul>
                </article>
            </div>
        </section>
    )
}

// Export to use it elsewhere
export default Skills