import Link from "next/link";
import SubTitle from "./subTitle";

const Contact = () => (
                <div className="bg-bg">
                    <div className="content-container flex-column">
                        <SubTitle id="contact" text="Get in Touch">
                            <span className="text-white">Contact Me:</span>
                            <Link className="space-infront" href="mailto:johnschool432@gmail.com">
                                <span className="fa-solid fa-envelope text-white text-hover-color1"/>
                            </Link>
                            <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                <span className="fa-brands fa-linkedin text-white text-hover-color2"/>
                            </Link>
                            <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                <span className="fa-brands fa-github text-white text-hover-color1"/>
                            </Link>
                            <span className="text-white space-infront">
                                &copy; 2025 LyKeyTech LLC
                            </span>
                        </SubTitle>
                    </div>
                </div>
);

export default Contact;