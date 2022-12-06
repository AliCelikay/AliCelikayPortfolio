import React from 'react';
import AboutPic from '../../img/northwestern_profile.jpg';
import '../../css/about.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function About() {
    return (
        <div>
            <div className='about-page'>
                <h2>
                    About Me
                </h2>
                <div>
                    <div className='card bioCont'>
                        <div className='about-pic'>
                            <img alt='mypicture' className=' myPic' src={AboutPic} />
                        </div>
                        <div className='bioInfo'>
                            <p >
                                Hi, I am a Full Stack Web Developer with a background in Computer Science. I recently completed my certificate in full-stack web development from Northwestern University and developed skills in MongoDB, Express.js, React.js, Node.js, MySQL, JavaScript, HTML, CSS, and others technologies to develop responsive web applications. After completing my boot camp at Northwestern, I have continued my studies independently to learn more about Amazon Web Services.
                            </p>
                            <p>
                                I have also completed my associate degree in Engineering Science at William Rainey Harper College, and I plan to earn my bachelor's degree in Computer Science at the University of Illinois Chicago.
                            </p>
                            <p>
                                I can collaborate and work with a diverse team while solving problems in high-stress environments. I enjoy connecting with co-workers, and I am passionate about building applications to make people's lives easier.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}




