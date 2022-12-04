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
                            <p className=''>
                                Hi, I am a Full Stack Web Developer from Des Plaines Illinois. I completed my Associate Degree from William Rainey Harper College in Engineering Science. I plan to further my education at University of Illinois Chicago in Computer Science.

                                I also recently completed my Certificate in Full Stack Web Development from Northwestern University where I learned all the latest coding practices for designing a powerful responsive websites and applications.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className='tech-skills'>
                        <h3>Technical skills</h3>
                        <p>
                            
                            <li>Front End</li>
                            <li>Back End</li>
                            <li>Frame works</li>
                            <li>Other Technologies</li>
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}




