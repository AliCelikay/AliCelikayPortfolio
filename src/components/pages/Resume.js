// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import React from 'react';
import '../../css/resume.css'
import webDevResume from '../../img/AliCelikayResume.pdf'

export default function Resume() {
    return (
        <>
            <h2 className='resume'>My Resume</h2>
            <div className='resume-page'>
                <div className='resume-div'>
                    <h3 className='download'>Download my resume: <a className='resume-box btn btn-light' href={webDevResume} target="_blank" rel="noreferrer"><Icon icon="material-symbols:cloud-download-outline" width="30" height="30" /></a></h3>
                </div>


                <p className='skills-btns'>
                    <a className="skill-btn text-black" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><Icon icon="material-symbols:computer" /> Front-End</a>

                    <a className="skill-btn text-black" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"><Icon icon="clarity:rack-server-line" /> Back-End</a>
                </p>
                <div class="row skills-cards">
                    <div class="card-1 col-3">
                        <div class="icon-cards collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <li className='icon-size'><i class="devicon-html5-plain colored"></i> HTML</li>
                                <li className='icon-size'><i class="devicon-css3-plain colored"></i> CSS</li>
                                <li className='icon-size'><i class="devicon-javascript-plain colored"></i> JavaScript</li>
                                <li className='icon-size'><i class="devicon-jquery-plain colored"></i> Jquery</li>
                                <li className='icon-size'><i class="devicon-handlebars-plain colored"></i> Handlebars</li>
                                <li className='icon-size'><i class="devicon-react-original colored"></i> React</li>
                                <li className='icon-size'><i class="devicon-bootstrap-plain colored"></i> Bootstrap</li>
                                <li className='icon-size'><i class="devicon-webpack-plain colored"></i> Webpack</li>
                                <li className='icon-size'><Icon icon="logos:materializecss" width="18" height="20" /> Materialize</li>
                                <li className='icon-size'><i class="devicon-materialui-plain colored"></i> Material UI</li>
                            </div>
                        </div>
                    </div>
                    <div class="card-2 col-3">
                        <div class="icon-cards collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                <li className='icon-size'><i class="devicon-nodejs-plain colored"></i> Node.js</li>
                                <li className='icon-size'><i class="devicon-express-original colored"></i> Express.js</li>
                                <li className='icon-size'><i class="devicon-mysql-plain colored"></i> MySQL-Sequelize</li>
                                <li className='icon-size'><i class="devicon-mongodb-plain colored"></i> MongoDB-Mongoose</li>
                                <li className='icon-size'><i class="devicon-graphql-plain colored"></i> GraphQL</li>
                                <li className='icon-size'><Icon icon="mdi:api" width="20" height="20" /> RESTful APIs</li>
                                <li className='icon-size'><Icon icon="ion:logo-pwa" width="20" height="20" /> PWA</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}



