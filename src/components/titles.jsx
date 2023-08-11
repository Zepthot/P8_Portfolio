import '../styles/titles.scss';

// Double title container
const Titles = (props) => {
    return (
        <div className='title-container'>
            <h2 className='title'>{props.title}<span className='back-title'>{props.btitle}</span></h2>
        </div>
    )
}

// Export to use it elsewhere
export default Titles