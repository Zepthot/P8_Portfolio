import '../styles/skills.scss';
import Titles from './titles';
import Line from './title-line';
import SkillBar from './skill-bar';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// Fetch data from skills-hard file for skill bars
const res = await fetch('./skills-hard.json');
let skillHardList = await res.json();

// Skills function for the third section of the page
function Skills() {
    // Translation function
    const {t} = useTranslation();

    return (
        <section id='skills' className="skills-section">
            {/* Call Title component with 2 props */}
            <Titles title={t('skills.title')} btitle={t('skills.backtitle')} />
            {/* Split line */}
            <Line />
            <div className='skills-container'>
                <article className='skills-soft'>
                    <ul>
                    {/* Translation function */}
                    {i18n.t('skills.softskills', {returnObjects: true}).map((skill) => (
                        <li key={skill.id} className='skills-soft-li'>
                            <strong>{skill.title}</strong>
                            <div className='skills-soft-div'>{skill.subtitle}</div>
                        </li>
                    ))}
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