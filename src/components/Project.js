import React from 'react';
import '../css/project.css';

export default function Project(props) {
    return (
        <div className='project-container'>
            <div className="card project-card mb-5" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="card-body overlay">
                    <span>
                        <h4 className="card-title text-body">{props.name}</h4>
                        <h6 className="card-title text-body">{props.description}</h6>
                        <h6 className="card-title text-body">{props.tech}</h6>
                        <a href={props.link} rel='noreferrer' target="_blank" className="card-link text-body"><span className='live-link'>{props.liveLink}</span></a>
                        <a href={props.github} rel='noreferrer' style={{opacity: 1}} target="_blank" className="card-link text-body"><i class="fa-brands fa-github fa-2x"></i></a>
                    </span>
                </div>
            </div>
        </div>
    );
}
