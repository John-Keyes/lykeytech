import Link from "next/link";
import DownloadIcon from "../downloadIcon";
import SubTitle from "./subTitle";
import Title from "./title";
import Card from "../card";
import { myPfp, resume } from 'src/lib/helpers/static';


const About = () => (
    <Card id="about" aria-label="About" className="flex flex-column card-purple" >
                        <div id="about-title-container" aria-label="About Title-Container" className="flex flex-center flex-column flex-row-md flex-between">
                            <Title id="about-title" aria-label="About Title" text="Hello!" className="fit-width text-center text-start-md"/>
                            <Link id="about-title-link" aria-label="About Title Link" title="About Title Link" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                <img src={myPfp} alt="Profile Picture" className="rounded-pfp border border-light-blue button-glow-blue" width="150" height="150"/>
                            </Link>
                        </div>
                        <SubTitle id="about-hello" aria-label="About Hello" text={<>My name is <Link id="about-hello-text-link" aria-label="About Hello Text Link" title="About Hello Text Link" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-dark-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></>}>
                            <h3 id="about-introduction" aria-label="About Introduction" className="text-center text-start-md">
                                I build web and mobile applications that help fulfill any need. 
                                I build applications with immersive user experiences and performance efficient applications.
                            </h3>
                            <div className="flex flex-center flex-start-md">
                                <div id="resume-download-container" aria-label="Resume Download Button Container" className="flex flex-row flex-center flex-start-md">
                                    <DownloadIcon id="resume-download" aria-label="Resume Download Button" className="bg-dark-blue bg-hover-clear-blue button-glow-blue" href={resume}>Download Resume</DownloadIcon>
                                </div>
                            </div>
                        </SubTitle>
                    </Card> 
);

export default About;