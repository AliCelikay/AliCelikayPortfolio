import React from 'react';
import Project from '../Project';
import '../../css/portfolio.css'
// images
// import HW6 from '../../img/HW6.png';
import Java from '../../img/Java.png';
// import Project1 from '../../img/Project1.png';
import HW19 from '../../img/HW19.png'
import HW14 from '../../img/HW14.png';
import Project2 from '../../img/Project2.png';
// import HW21 from '../../img/HW21.png';
import FitApp from '../../img/fitapp.png';
import Project3 from '../../img/Project3.png';

export default function Portfolio() {
    return (
        <>
            <h2 className='my-portfolio'>My Portfolio's</h2>
            <div className='portfolio-cont'>
                <div className='projectContainer row m-3 justify-content-center justify-content-around d-flex flex-wrap'>
                    <Project
                        name="Java Tech News Api"
                        description="News site that allows anyone to share a post about any new tech savvy technologies and comment or upvote on other people's posts."
                        tech="Java, HTML, CSS, Thymeleaf, Spring"
                        image={Java}
                        github="https://github.com/AliCelikay/Tech-New-Api"
                        link="https://tech-news-ali-java-api.herokuapp.com/"
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
                        name="Fitness App"
                        description="Front-end fitness application allows users browse over 1300 exercises with practical examples, choose major muscle groups from a category, search for a specific exercises, view related videos on YouTube, view similar exercises for the muscle groups, and view similar exercises for the equipment used"
                        tech="Node.js, React.js, JavaScript, ExerciseDb API and YouTube Search and Download API, Material UI" 
                        image={FitApp}
                        github="https://github.com/AliCelikay/fitness-app"
                        link="https://fitness-enhanced.netlify.app/"
                        gitHubLink="GitHub Repo"
                        liveLink="Live Link"
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

