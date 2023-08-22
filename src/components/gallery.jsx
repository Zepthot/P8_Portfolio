import React from "react";
import ReactModal from "react-modal";
import '../styles/gallery.scss';
import i18n from "../i18n";

// Set main element
ReactModal.setAppElement('#root');

// Fetch categories from category file
const resp = await fetch('./category.json');
let catList = await resp.json();

// Class for ReactModal
class Gallery extends React.Component {
    constructor () {
        super();
        // All datas used
        this.state = {
            showModal: false,
            id: "",
            title: "",
            cover: "",
            coveralt: "",
            context: "",
            gitlink: "",
            infos: [],
            tags: []
        };
        
        // Function to open and close modal
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    // Stored data in state when opened
    handleOpenModal = data => {
        this.setState({ showModal: true });
        this.setState({id: data.id});
        this.setState({title: data.title});
        this.setState({cover: data.cover});
        this.setState({coveralt: data.coveralt});
        this.setState({context: data.context});
        this.setState({gitlink: data.linkgit});
        this.setState({infos: data.infos});
        this.setState({tags: data.infos.tags});
    }

    // Close modal
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
    // Render of elements
    render () {
        return (
            // List of every projects
            <ul className="gallery">
                {/* Translation function */}
                {i18n.t('portfolio.projects', {returnObjects: true}).reverse().map((project) =>  {
                    let banner = catList.find(cat => cat.id === project.categoryid);
                    return (
                    <li key={project.id}>
                        {/* Sending data on click */}
                        <button onClick={() => this.handleOpenModal(project)} className='button-container'>
                            <div className='button-banner' style={{backgroundColor: `${banner.bgcolor}`}}>
                                <p style={{color: `${banner.fontcolor}`}}>{banner.name}</p>
                            </div>
                            <img src={project.cover} alt={project.coveralt} />
                            <h3>{project.title}</h3>
                        </button>
                    </li>
                    )})}
                {/* Render of modal */}
                <ReactModal isOpen={this.state.showModal} contentLabel="Modal for projects" onRequestClose={this.handleCloseModal} className="modal" overlayClassName="overlay">
                    {/* Title and close button */}
                    <div className="modal-title-close">
                        <h3>{this.state.title}</h3>
                        <button onClick={this.handleCloseModal} className="modal-close-button">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    {/* Cover of project */}
                    <img src={this.state.cover} alt={this.state.coveralt} className="modal-cover"/>
                    {/* Information details */}
                    <div className="modal-infos-button">
                        <div className="modal-infos-container">
                            {/* Left side */}
                            <div className="infos-format infos-context">
                                <div>
                                    <h4>Contexte</h4>
                                    <p>{this.state.context}</p>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="infos-format infos-description">
                                <div className="description-title">
                                    <h4>Informations</h4>
                                    <p>{this.state.infos.year}</p>
                                </div>
                                <p>{this.state.infos.description}</p>
                                <ul>
                                    {this.state.tags.map((tag, index) => {
                                        return (
                                            <li key={index}>{tag}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-button">
                            <button className={this.state.gitlink ? "git-button" : "disabled"} disabled={this.state.gitlink ? false : true}>
                                <a href={this.state.gitlink} target='_blank' rel='noreferrer' >Github</a>
                            </button>
                        </div>
                    </div>
                </ReactModal>
            </ul>
        );
    }
}

// const props = {};

// Export to use it elsewhere
export default Gallery