import '../styles/skills.scss';
import Titles from './titles';
import Line from './title-line';
import SkillBar from './skill-bar';

// Fetch data from skills-soft file for side skills
const resp = await fetch('./skills-soft.json');
let skillSoftList = await resp.json();

// Fetch data from skills-hard file for skill bars
const res = await fetch('./skills-hard.json');
let skillHardList = await res.json();

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
                    {skillSoftList.map((skill) => {
                        return (
                            <li key={skill.id} className='skills-soft-li'>
                                <strong>{skill.title}</strong>
                                <div className='skills-soft-div'>{skill.subtitle}</div>
                            </li>
                        )
                    })}
                    </ul>
                </article>
                {/* Skills bar of hard skills */}
                <article className='skills-hard'>
                    <ul>
                    {skillHardList.map((skill) => {
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