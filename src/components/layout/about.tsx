import Link from "next/link";
import DownloadIcon from "../downloadIcon";
import SubTitle from "./subTitle";
import Title from "./title";
import Card from "../card";
import { myPfp, resume } from 'src/lib/helpers/static';


const About = () => (
    <Card className="flex flex-column card-purple">
                        <div className="flex flex-center flex-column flex-row-md flex-between">
                            <Title id="about" text="Hello!" className="fit-widthtext-center text-start-md "/>
                            <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                <img src={myPfp} alt="John Keyes" className="rounded-pfp border border-light-blue button-glow-blue" width="150" height="150"/>
                            </Link>
                        </div>
                        <SubTitle id="hello" text={<>My name is <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-dark-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></>}>
                            <h3 className="text-center text-start-md">
                                I build web and mobile applications that help fulfill any need. 
                                I build applications with immersive user experiences and performance efficient applications.
                            </h3>
                            <div className="flex flex-center flex-start-md">
                                <DownloadIcon className="bg-dark-blue bg-hover-clear-blue button-glow-blue" href={resume}>Download Resume</DownloadIcon>
                            </div>
                        </SubTitle>
                    </Card> 
);

export default About;