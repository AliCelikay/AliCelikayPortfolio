import React from 'react';
import Project from '../Project';
// images
import HW6 from '../../img/HW6.png';
import Project1 from '../../img/Project1.png';
import HW14 from '../../img/HW14.png';
import Project2 from '../../img/Project2.png';
import HW21 from '../../img/HW21.png';
import Project3 from '../../img/Project3.png';

export default function Portfolio() {
    return (
        <div >
            <h2>My Portfolio's</h2>
            <div className='projectContainer row m-3 justify-content-center justify-content-around d-flex flex-wrap'>
                <Project
                    name="Search Weather Report"
                    description="App uses local storage and a 3rd party api"
                    image={HW6}
                    github="https://github.com/AliCelikay/6-ali-weather-report"
                    link="https://alicelikay.github.io/6-ali-weather-report/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
                <Project
                    name=" Best Artist Search"
                    description="App uses local storage, a 3rd Party Api, and Create and Read methods"
                    image={Project1}
                    github="https://github.com/nolacoder/Best-Artist-Search-Ever"
                    link="https://nolacoder.github.io/Best-Artist-Search-Ever/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
                <Project
                    name="Tech Blog"
                    description="App uses MVC structure, MySQL database, and CRUD methods combined with express routes"
                    image={HW14}
                    github="https://github.com/AliCelikay/14-ali-MVC-blog"
                    link="https://shrouded-woodland-33004.herokuapp.com/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
                <Project
                    name="MVC 3rd Party Api Game of Thrones"
                    description="Group Project where app uses MVC structure and Create and Read methods with express routes"
                    image={Project2}
                    github="https://github.com/AliCelikay/GameOfThronesCheatSheet-Project2"
                    link="https://shrouded-spire-99945.herokuapp.com/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
                <Project
                    name="MERN Book Search"
                    description="App utilizes MERN features, a 3rd party api, and Create, Read, and Delete Methods to search through your favorite books"
                    image={HW21}
                    github="https://github.com/AliCelikay/21-ali-MERN-Book-Search-Engine"
                    link="https://protected-mountain-50676.herokuapp.com/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
                <Project
                    name="MERN CRUD Fan-Fic"
                    description="App utilizes MERN features, a 3rd party api, and CRUD Methods to write stories about your favorite hero's"
                    image={Project3}
                    github="https://github.com/hamzaramzanali/fan-fiction"
                    link="https://stark-sierra-05669.herokuapp.com/"
                    gitHubLink="GitHub Repo"
                    liveLink="Live Link"
                />
            </div>
        </div>
    );
}

