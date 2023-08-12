import '../styles/article.scss';

// Article template with props
const Article  = (props) => {
    return (
        <article className='article-container'>
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
        </article>
    )
}

// Export to use it elsewhere
export default Article