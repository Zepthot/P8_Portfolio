import React from "react";
import ReactModal from "react-modal";

import '../styles/gallery.scss';

ReactModal.setAppElement('#root');

// Fetch data from data file and reverse order
const res = await fetch('./data.json');
let dataList = await res.json();
dataList = dataList.reverse();

// Fetch categories from category file
const resp = await fetch('./category.json');
let catList = await resp.json();

class Gallery extends React.Component {
    constructor () {
        super();
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
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
        
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
        
    handleCloseModal () {
        this.setState({ showModal: false });
    }
        
    render () {
        return (
            <ul className="gallery">
                {dataList.map((project) => {
                    let banner = catList.find(cat => cat.id === project.categoryid);
                    return (
                    <li key={project.id}>
                        <button onClick={() => this.handleOpenModal(project)} className='button-container'>
                            <div className='button-banner' style={{backgroundColor: `${banner.bgcolor}`}}>
                                <p style={{color: `${banner.fontcolor}`}}>{banner.name}</p>
                            </div>
                            <img src={project.cover} alt={project.coveralt} />
                            <h3>{project.title}</h3>
                        </button>
                    </li>
                    )
                })}
                <ReactModal isOpen={this.state.showModal} contentLabel="Modal for projects" onRequestClose={this.handleCloseModal} className="modal" overlayClassName="overlay">
                    <div className="modal-title-close">
                        <h3>{this.state.title}</h3>
                        <button onClick={this.handleCloseModal} className="modal-close-button">X</button>
                    </div>
                    <img src={this.state.cover} alt={this.state.coveralt} className="modal-cover"/>
                    <div className="modal-infos-container">
                        <div className="infos-format infos-context">
                            <div>
                                <h4>Contexte</h4>
                                <p>{this.state.context}</p>
                            </div>
                            <a href={this.state.gitlink} target='_blank' rel='noreferrer'>
                                {this.state.gitlink ? <button style={{cursor: "pointer"}}>Github</button> : <button style={{cursor: "not-allowed"}} disabled>Github</button>}
                            </a>
                        </div>
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
                </ReactModal>
            </ul>
        );
    }
}

// const props = {};

export default Gallery