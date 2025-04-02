import Link from "next/link";
import SubTitle from "./subTitle";

const Socials = () => (
                <div className="bg-dark-purple home-section-padding border-top border-top-3 border-top-light-purple">
                    <div className="content-container">
                        <SubTitle id="socials" className="text-white" text="Socials">
                            <Link href="mailto:johnschool432@gmail.com">
                                <span className="fa-solid fa-envelope text-white text-hover-dark-red"/>
                            </Link>
                            <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                <span className="fa-brands fa-linkedin text-white text-hover-dark-blue"/>
                            </Link>
                            <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                <span className="fa-brands fa-github text-white text-hover-b;ack"/>
                            </Link>
                            <span className="text-white space-infront">
                                &copy; 2025 LyKeyTech LLC
                            </span>
                        </SubTitle>
                    </div>
                </div>
);

export default Socials;