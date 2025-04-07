import Link from "next/link";
import DownloadIcon from "../download/downloadIcon";
import SubTitle from "./subTitle";
import Title from "./title";
import Card from "../card";
import { myPfp, resume } from 'src/lib/static';



const About = () => (
    <Card className="flex-column border-top border-top-5 border-top-light-purple card-hover-purple">
                        <div className="flex flex-center flex-row">
                            <Title id="about" text="Hello!" className="fit-width text-white"/>
                            <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                <img src={myPfp} alt="John Keyes" className="rounded-pfp border border-light-blue button-glow-blue" width="150" height="150"/>
                            </Link>
                        </div>
                        <SubTitle id="hello" text={<span>My name is <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-dark-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></span>}>
                                    <h3>
                                        I build web and mobile applications that help fulfill any need. 
                                        I build applications with immersive user experiences and performance efficient applications.
                                    </h3>    
                                    <DownloadIcon className="bg-dark-blue bg-hover-clear-blue button-glow-blue" href={resume}><span className="space-infront">Download Resume</span></DownloadIcon>
                        </SubTitle>
                    </Card> 
);

export default About;