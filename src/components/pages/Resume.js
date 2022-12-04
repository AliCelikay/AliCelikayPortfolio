// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import React from 'react';
import '../../css/resume.css'
import webDevResume from '../../img/Ali Celikay Resume.pdf'

export default function Resume() {
    return (
        <>
            <h2 className='resume'>My Resume</h2>
            <div className='resume-page'>
                <div className='resume-div'>
                    <h3>Download my resume: <a className='resume-box btn btn-light' href={webDevResume} target="_blank" rel="noreferrer"><Icon icon="material-symbols:cloud-download-outline" width="30" height="30" /></a></h3>
                </div>



                <p className='skills-btns'>
                    <a className="skill-btn text-black" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><Icon icon="material-symbols:computer" /> Front-End</a>

                    <a className="skill-btn text-black" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><Icon icon="clarity:rack-server-line" /> Back-End</a>
                    
                    {/* <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> */}
                </p>
                <div class="row skills-cards">
                    <div class="col-3">
                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <li><i class="devicon-html5-plain colored"></i> HTML</li>
                                <li><i class="devicon-css3-plain colored"></i> CSS</li>
                                <li><i class="devicon-javascript-plain colored"></i> JavaScript</li>
                                <li><i class="devicon-jquery-plain colored"></i> Jquery</li>
                                <li><i class="devicon-handlebars-plain colored"></i> Handlebars</li>
                                <li><i class="devicon-react-original colored"></i> React</li>
                                <li><i class="devicon-bootstrap-plain colored"></i> Bootstrap</li>
                                <li><i class="devicon-webpack-plain colored"></i> Webpack</li>
                                <li><Icon icon="logos:materializecss" width="18" height="20" /> Materialize</li>
                                <li><Icon icon="logos:uikit" width="20" height="20" /> UIKit</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                <li><i class="devicon-nodejs-plain colored"></i> Node.js</li>
                                <li><i class="devicon-express-original colored"></i> Express.js</li>
                                <li><i class="devicon-mysql-plain colored"></i> MySQL-Sequelize</li>
                                <li><i class="devicon-mongodb-plain colored"></i> MongoDB-Mongoose</li>
                                <li><i class="devicon-graphql-plain colored"></i> GraphQL</li>
                                <li><Icon icon="mdi:api" width="20" height="20" /> RESTful APIs</li>
                                <li><Icon icon="ion:logo-pwa" width="20" height="20" /> PWA</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}