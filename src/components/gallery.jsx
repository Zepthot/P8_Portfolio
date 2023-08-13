import '../styles/gallery.scss';
import Article from './article';

// Fetch data from data file and reverse order
const res = await fetch('./data.json');
let dataList = await res.json();
dataList = dataList.reverse();

// Portfolio function for the second section of the page
function Gallery() {
    return (
    <div className='gallery'>
        {/* Browses the data list and displays the data for each item */}
        {dataList.map((project) => {
            return (
            <li key={project.id} id={project.id}>
                {/* Sends the necessary data to the component */}
                <Article title={project.title} image={project.cover} alt={project.coveralt} banner={project.categoryid} />
            </li>
            )
        })}
    </div>
    )
}

// Export to use it elsewhere
export default Gallery