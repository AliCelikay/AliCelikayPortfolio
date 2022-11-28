import React from 'react';
import '../../css/resume.css'
import webDevResume from '../../img/WebDev-Resume.pdf'

export default function Resume() {
    return (
            <div className='resume-cont'>
                <h2>
                    Resume
                </h2>
                <div>
                    <p>Download my <a href={webDevResume} target="_blank" rel="noreferrer">resume</a></p>
                </div>
                <div>
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Jquery</li>
                        <li>Responsive Design</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h3>Back-end Proficiencies</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
    );
}
