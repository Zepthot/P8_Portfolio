import '../styles/article.scss';

// Fetch categories from category file
const res = await fetch('./category.json');
let catList = await res.json();

// Article template with props
const Article  = (props) => {
    let banner = catList.find(cat => cat.id === props.banner);
    return (
        <article className='article-container'>
            <div className='article-banner' style={{backgroundColor: `${banner.bgcolor}`}}>
                <p style={{color: `${banner.fontcolor}`}}>{banner.name}</p>
            </div>
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
        </article>
    )
}

// Export to use it elsewhere
export default Article