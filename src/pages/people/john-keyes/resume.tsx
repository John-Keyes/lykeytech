import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Resume: NextPage = () => (
    <div id="resume-root">
	<div id="resume-side-bar">
        <div className="resume-side-bar-section">
            <div className="resume-side-bar-section-title-container">
                <h2 className="resume-side-bar-section-title">Contact Me</h2>
            </div>
            <div>
                <ul>
                    <li><p className="resume-p">Orlando, Florida</p></li>
                    <li><p className="resume-p">Call: <a href="tel:+14073983915" target="_blank" rel="noopener noreferrer">+1 407-398-3915</a></p></li>
                    <li><p className="resume-p">Email: <a href="mailto:johnschool432@gmail.com" target="_blank" rel="noopener noreferrer">johnschool432@gmail.com</a></p></li>
                </ul>
            </div>
        </div>
        <div className="resume-side-bar-section">
            <div className="resume-side-bar-section-title-container">
                <h2 className="resume-side-bar-section-title">My links</h2>
            </div>
            <div>
                <ul>
                <li><p className="resume-p"><a href="https://www.lykeytech.com" className="text-white" target="_blank" rel="noopener noreferrer">Website</a></p></li>
                    <li><p className="resume-p"><a href="https://github.com/John-Keyes" className="text-white" target="_blank" rel="noopener noreferrer">Github</a></p></li>
                    <li><p className="resume-p"><a href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></li>
                    <li><p className="resume-p"><a href="https://cmscritic.com/" className="text-white" target="_blank" rel="noopener noreferrer">Work example in a team</a></p></li>
                </ul>
            </div>
        </div>
        <div className="resume-side-bar-section">
            <div className="resume-side-bar-section-title-container">
                <h2 className="resume-side-bar-section-title">Education</h2>
            </div>
            <ul>
                <li><p className="resume-p">Institution: The University of North Florida</p></li>
                <li><p className="resume-p">Location: Jacksonville, FL</p></li>
                <li><p className="resume-p">Degree: Bachelor of Science</p></li>
                <li><p className="resume-p">Major: Computer Science</p></li>
                <li><p className="resume-p">GPA: 3.6 / 4</p></li>
                <li><p className="resume-p">Graduated: May 6, 2022</p></li>
            </ul>
        </div>
        <div className="resume-side-bar-section">
            <div className="resume-side-bar-section-title-container">
                <h2 className="resume-side-bar-section-title">Skills</h2>
            </div>
            <div>
                <ul>
                    <li><p className="resume-p">Next</p></li>
                    <li><p className="resume-p">Linux / UNIX</p></li>
                    <li><p className="resume-p">HTML</p></li>
                    <li><p className="resume-p">CSS, SCSS, Bootstrap</p></li>
                    <li><p className="resume-p">OOP: JavaScript, TypeScript, Java, C#</p></li>
                    <li><p className="resume-p">.NET Core</p></li>
                    <li><p className="resume-p">Node</p></li>
                    <li><p className="resume-p">RDMS: MySQL</p></li>
                    <li><p className="resume-p">SQL</p></li>
                    <li><p className="resume-p">AWS</p></li>
                    <li><p className="resume-p">DevOps</p></li>
                    <li><p className="resume-p">Docker</p></li>
                    <li><p className="resume-p">CI/CD</p></li>
                    <li><p className="resume-p">REST APIs</p></li>
                    <li><p className="resume-p">Git</p></li>
                    <li><p className="resume-p">Agile</p></li>
                    <li><p className="resume-p">Jira</p></li>
                </ul>
            </div>
        </div>
	</div>
	<div id="resume-body">
        <div className="resume-body-section">
            <div className="resume-body-section-title-container">
                <h1 className="resume-title">John Keyes | Software Engineer</h1>
            </div>
            <div className="resume-body-section-body">
                <p className="resume-p"> 
                I am a Software Engineer with 3 years of experience working on web and mobile applications on a full stack. I am seeking a position where I can leverage my knowledge and technology skills in a challenging environment and grow within an organization. 
                </p>
            </div>
        </div>
		<div className="resume-body-section">
            <div className="resume-body-section-title-container">
                <h2 className="resume-body-section-title">Work Experience</h2>
            </div>
            <div className="resume-body-section-body">
            <div className="resume-body-section-body-item">
                    <div className="resume-body-section-body-item-title-container">
                        <h3><Link href="https://www.playerepic.com/" target="_blank" rel="noopener noreferrer">Player Epic</Link></h3>
                    </div>
                    <div className="resume-body-section-body-item-body-container">
                        <div>
                            <h4>{"Software Engineer (Part Time and Unpaid)"}</h4>
                            <p className="resume-p">08/2024 - Present</p>
                        </div>
                        <ul className="resume-body-section-body-item_list">
                            <li>
                                <p className="resume-p">
                                    Designed the UI/UX of a version of the "PlayerEpicMobileHealth" application with Figma.
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Developed and maintained a version of the "PlayerEpicMobileHealth" application with React-Native.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-body-section-body-item">
                    <div className="resume-body-section-body-item-title-container">
                        <h3><Link href="https://outlier.ai/" target="_blank" rel="noopener noreferrer">Outlier.ai</Link></h3>
                        <p className="resume-p">Address: 398 11th Street San Francisco, CA 94103 United States</p>
                    </div>
                    <div className="resume-body-section-body-item-body-container">
                        <div>
                            <h4>{"AI Model Trainer (Contract)"}</h4>
                            <p className="resume-p">05/2024 - 09/2024</p>
                        </div>
                        <ul className="resume-body-section-body-item_list">
                            <li>
                                <p className="resume-p">
                                    Constructed detailed prompts that are meant to test an AI model's capabilities to respond. 
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Evaluated models based on the accuracy of their response. Responses contain explanations and code snippets.
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Reviewed prompts and model responses of other members.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-body-section-body-item">
                    <div className="resume-body-section-body-item-title-container">
                        <h3><a href="https://www.solodev.com/" target="_blank" rel="noopener noreferrer">Solodev</a></h3>
                        <p className="resume-p">Address: 800 N Magnolia Ave #1400, Orlando, FL 32803</p>
                        <p className="resume-p"><Link href="tel:+18008597656" target="_blank" rel="noopener noreferrer">800-859-7656</Link></p>
                    </div>
                    <div className="resume-body-section-body-item-body-container">
                        <div>
                            <h4>Software Developer</h4>
                            <p className="resume-p">03/2023 - 05/2023</p>
                        </div>
                        <ul className="resume-body-section-body-item_list">
                            <li>
                                <p className="resume-p">
                                    Supported Agile daily standup addressing project progress and deliverables and used Jira to track the lifecycle and flow of tasks and sprints. 
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Utilized React, HTLML, CSS, JavaScript, Redux, Next, Sass, Typescript, and Bootstrap to develop the UI and UX of responsive web applications. 
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Utilized REST API development and the Mailchimp service for email validation; Sequelize ORM to generate tables with MySQL relational databases with models and migrations. 
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Experience with Docker to containerize and run the full stack application in a production-ready environment; Bitbucket to manage pull requests and to make sure each push is production-ready with Bitbucket pipelines (CI/CD). 
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Frequently pushed production tags to our AWS S3 bucket for others to test.
                                </p>
                            </li>
                            <li>
                                <p className="resume-p">
                                    Conducted Quality Assurance Assessments on Solodev websites and responsible for team communication for reported errors and requirements.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-body-section-body-item">
                    <div className="resume-body-section-body-item-title-container">
                        <h3><Link href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">Resilience</Link></h3>
                        <p className="resume-p">4103 USF Cedar Cir, 202 Tampa, FL 33620</p>
                        <p className="resume-p"><Link href="tel:+18138107943" target="_blank" rel="noopener noreferrer">813-810-7943</Link></p>
                    </div>
                    <div className="resume-body-section-body-item-body-container-group">
                        <div className="resume-body-section-body-item-body-container">
                            <div>
                                <h4>Project Manager</h4>
                                <p className="resume-p">08/2022 - 03/2023</p>
                            </div>
                            <ul className="resume-body-section-body-item_list">
                                <li>
                                    <p className="resume-p">
                                        Drive weekly meetings between the developers on my team, communicating key announcements, project updates, and deliverables surrounding future sprints.
                                    </p>
                                </li>
                                <li>
                                    <p className="resume-p">
                                        Respond to and assist developers with project technical issues and environment setup relative to the operating system. 
                                    </p>
                                </li>
                                <li>
                                    <p className="resume-p">
                                        Managed the code at the end of each development phase by merging each developer's branch for ultimate app functionality improvements.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="resume-body-section-body-item-body-container">
                            <div>
                                <h4>Application Developer</h4>
                                <p className="resume-p">08/2021 - 08/2022</p>
                            </div>
                            <ul className="resume-body-section-body-item_list">
                                <li>
                                    <p className="resume-p">
                                        Integral team member on the development of an innovative mobile application educating K-12 students about their emotions.                                    
                                    </p>
                                </li>
                                <li>
                                    <p className="resume-p">
                                        Utilized HTLML, CSS, JavaScript, React Native and Expo libraries to develop the UI/UX of our mobile application; Express and Node framework to develop our REST API. 
                                    </p>
                                </li>
                                <li>
                                    <p className="resume-p">
                                        The MySQL relational database management system and its workbench are utilized to import and export data to and from AWS.
                                    </p>
                                </li>
                                <li>
                                    <p className="resume-p">
                                        Responsible for regular app update deployment to the Google play and App store with Android Studio and XCode and conducting unit tests on new functionality.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="resume-body-section">
            <div className="resume-body-section-title-container">
                <h2 className="resume-body-section-title">Related Projects</h2>
            </div>
            <div className="resume-body-section-body">
                <div className="resume-body-section-body-item-body-container">
                    <div className="resume-body-section-body-item-title-container">
                        <h3>SIC and SICXE Assembler</h3>
                    </div>
                    <ul className="resume-body-section-body-item_list">
                        <li><p className="resume-p">This program assembled SIC assembly to an object file.</p></li>
                        <li><p className="resume-p">I used C language.</p></li>
                    </ul>
                </div>
            </div>
</div>*/}
        
	</div>
</div>
);

Resume.getInitialProps = async () => {
    return {
        pageTitle: "Resume LyKey",
        pageDescription: "John Keyes Resume | LyKey Tech"
    }
}
export default Resume;