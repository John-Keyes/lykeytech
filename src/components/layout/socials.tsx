import Link from "next/link";
import SubTitle from "./subTitle";
import Button from "../button";
import { qrCode } from "src/lib/static";

const Socials = () => (
                        <SubTitle id="socials" className="" sectionclassname="flex flex-column flex-center space-below" text="Contact">
                            <Button className="bg-purple bg-hover-light-purple button-glow-purple">
                                <Link href="mailto:john.keyes@lykeytech.com" className="">Send Message</Link>
                            </Button>
                            <img className="space-above card-img-blur border border-light-purple button-glow-purple" src={qrCode} alt="Website QR Code" width="150" height="150"/>
                            <h3>Socials</h3>
                            <div className="flex flex-row">
                                <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-linkedin fa-2xl text-hover-clear-blue"/>
                                </Link>
                                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-github fa-2xl text-hover-lighter-purple"/>
                                </Link>
                                <Link className="space-infront" href="https://www.upwork.com/freelancers/~018106e7e0817e9ad0" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-upwork fa-2xl text-hover-clear-blue"/>
                                </Link>
                                <Link className="space-infront" href="https://www.instagram.com/lykeytech" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-instagram fa-2xl text-hover-lighter-purple"/>
                                </Link>
                                <Link className="space-infront" href="https://www.facebook.com/profile.php?id=61575014991131" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-facebook fa-2xl text-hover-clear-blue"/>
                                </Link>
                                <Link className="space-infront" href="https://www.youtube.com/@LyKeyTech" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-youtube fa-2xl text-hover-lighter-purple"/>
                                </Link>
                                <Link className="space-infront" href="https://www.tiktok.com/@lykeytech" target="_blank" rel="noopener noreferrer">
                                    <span className="fa-brands fa-tiktok fa-2xl text-hover-clear-blue"/>
                                </Link>
                            </div>
                            <div className="flex flex-column space-above">
                                <span>
                                    Created solely by John Keyes.
                                </span>
                                <span className="space-infront">
                                    &copy; 2025 LyKeyTech LLC
                                </span>
                            </div>
                        </SubTitle>
);

export default Socials;