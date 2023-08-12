import '../styles/skill-bar.scss';

// Skill bar template with props
const SkillBar = (props) => {
    return (
        <div className='skill-bar'>
            <div className='bar-full' style={{width: `${props.value}%`, backgroundColor: `${props.color}`, borderBottom: `2px solid ${props.border}`}}>
                <img src={props.logo} alt={props.alt} />
                <p>{props.name}</p>
            </div>
        </div>
    )
}

// Export to use it elsewhere
export default SkillBar