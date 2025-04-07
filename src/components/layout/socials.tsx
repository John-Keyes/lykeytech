import Link from "next/link";
import SubTitle from "./subTitle";
import Button from "../button";

const Socials = () => (
                        <SubTitle id="socials" className="text-white" sectionclassName="flex flex-column flex-center space-below" text="Contact">
                            <Button className="bg-purple bg-hover-light-purple button-glow-purple"><Link href="mailto:johnschool432@gmail.com" className="text-white">Send Message</Link></Button>
                            <h3>Socials</h3>
                            <div className="flex flex-row">
                                <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-linkedin fa-2xl text-white text-hover-dark-blue"/>
                                </Link>
                                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-github fa-2xl text-white text-hover-black"/>
                                </Link>
                                <span className="text-white space-infront">
                                    &copy; 2025 LyKeyTech LLC
                                </span>
                            </div>
                        </SubTitle>
);

export default Socials;