import React from 'react';
import AboutPic from '../../img/northwestern_profile.jpg';
import '../../css/about.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function About() {
    return (
        <div className=''>
            <div>
                <h2>
                    About Me
                </h2>
                <div className='bioCont'>
                    <img alt='mypicture' className='img-thumbnail   myPic' src={AboutPic} />
                    <div className='bioInfo'>
                        <p>
                            Hi, my name is Ali Celikay and I am a web developer that lives in a Chicago suborb, Des Plaines. I recently graduated from a Full Stack Flex coding bootcamp with Northwestern University where I earned my certificate of completion.

                            During my bootcamp experience, I was mentored by Full Stack graduates to work with like minded individuals on projects where we successfully deployed professional production ready websites. On one of these projects, I was chosen to be the project manager where I encouraged an environment of communication for tasks, problems, and roles and we earned a 90% as a grade on that project.
                        </p>
                        <p>
                            In my free time, I am working on completing my Computer Science Bachlears degree. I recently graduated from William Rainey Harper College which is a community college at Schamburg Illinois.

                            I plan to continue my education at University of Illinois Chicago where I plan to earn my Bachlears degree in Computer Science.

                            During my college years, I have completed a few NASA programs where I was mentored by NASA engineers to work with like minded individuals on projects to successfully execute extraterrestrial missions. On one of these projects, I was chosen to be a business team lead where I successfully budgeted all the travel, material, and salary costs to be under our budget.

                        </p>
                    </div>
                    <div className='aside'>
                        <p>
                            To learn more about website projects, checkout My Portfolio's from the navbar section above! To learn more about my past experience, checkout my LinkedIn page from the footer section below!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

