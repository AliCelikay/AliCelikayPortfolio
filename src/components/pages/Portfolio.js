import React from 'react';
import Project from '../Project';
import '../../css/portfolio.css'
// images
import HW6 from '../../img/HW6.png';
// import Project1 from '../../img/Project1.png';
import HW19 from '../../img/HW19.png'
import HW14 from '../../img/HW14.png';
import Project2 from '../../img/Project2.png';
// import HW21 from '../../img/HW21.png';
import SNA from '../../img/SNA.png'
import Project3 from '../../img/Project3.png';

export default function Portfolio() {
    return (
        <>
            <h2 className='my-portfolio'>My Portfolio's</h2>
            <div className='portfolio-cont'>
                <div className='projectContainer row m-3 justify-content-center justify-content-around d-flex flex-wrap'>
                    <Project
                        name="Weather Dashboard"
                        description="Weather application for users to check the current and future weather forecasts in any city in the world."
                        tech="HTML, CSS Bootstrap, JavaScript, JQuery, Moment.js, Openweathermap API"
                        image={HW6}
                        github="https://github.com/AliCelikay/WeatherReport"
                        link="https://alicelikay.github.io/WeatherReport/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
                    />
                    <Project
                        name="PWA Text Editor "
                        description="A PWA text editor with offline and downloadable app functionality that stores data in browser-side IndexedDB combined with service workers that use InjectManifest for smoother and faster functionality."
                        tech="PWA, Service Worker, Node.js,Express.js, Webpack, UIKit, JavaScript, JQuery, HTML, CSS"
                        image={HW19}
                        github="https://github.com/AliCelikay/19-PWA-Editor"
                        link="https://salty-meadow-74717.herokuapp.com/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
                    />
                    <Project
                        name="Tech Blog"
                        description="A CMS-style full-stack blog site where developers can publish articles, blog posts, and thoughts and opinions about technologies."
                        tech="MySQL, Sequilize, Node.js, Express, HandleBars.js, BootStrap, JavaScript, JQuery, HTML, CSS"
                        image={HW14}
                        github="https://github.com/AliCelikay/14-ali-MVC-blog"
                        link="https://shrouded-woodland-33004.herokuapp.com/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
                    />
                    <Project
                        name="Game of Thrones CheatSheet "
                        description="Full-stack application for Game of Thrones enthusiasts to stay up to date on character, book, and house information on all eight seasons and all twelve books."
                        tech="MySQL, Sequilize, Node.js, Express, HandleBars.js, UIKit, JavaScript, JQuery, HTML, CSS"
                        image={Project2}
                        github="https://github.com/AliCelikay/GameOfThronesCheatSheet-Project2"
                        link="https://shrouded-spire-99945.herokuapp.com/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
                    />
                    <Project
                        name="Social NetWork API"
                        description="Back-end application allows users to socialize by adding thoughts, reacting to thoughts, and adding each other into their friends list."
                        tech="MongoDB, Mongoose, Node.js, Express, React, JavaScript, JQuery"
                        image={SNA}
                        github="https://github.com/AliCelikay/SocialNetworkApi-CRUD-MongoDB"
                        link="https://drive.google.com/file/d/1MOANt-BXQEC85_xOOT0cOqp8HeJ17Qd6/view"
                        gitHubLink="GitHub Repo"
                        liveLink="Walkthrough Video"
                    />
                    <Project
                        name="Marvel Fan Fiction"
                        description="Full-stack application where comic fans come to create, share, read, and collaborate on original fan fiction stories."
                        tech="MongoDB, Mongoose, Node.js, Express, React, JWT, Token, CRUD methods, JavaScript, JQuery, HTML, CSS"
                        image={Project3}
                        github="https://github.com/hamzaramzanali/fan-fiction"
                        link="https://stark-sierra-05669.herokuapp.com/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
                    />
                </div>
            </div>
        </>
    );
}

