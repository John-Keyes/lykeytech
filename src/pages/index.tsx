import React from 'react';
import {useRouter} from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link';
import Title from '../components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/layout/endorsement';
import Button from 'src/components/button';
import Image from 'next/image';
import Contact from 'src/components/layout/contact';
import DownloadHeader from 'src/components/download/downloadHeader';
import DownloadIcon from 'src/components/download/downloadIcon';
import PopMenu from 'src/components/popMenu';

const Home: NextPage = () => {
    return (
            <div className="fit-width fit-height">
                <div className="bg-light-gray">
                <div className="flex flex-column content-container content-container-padding ">
                    <Title id="lkeytechllc-title" text="LyKeyTech" className="fit-width text-bg"/>
                    <SubTitle id="about" text="Hello!">
                        <div className="flex-row">
                            <div className="flex-column">
                                <h3>My name is <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></h3>
                                <p className="p">
                                    I build web and mobile applications that help fulfill any need. 
                                    I build applications with immersive user experiences and performance efficient applications.
                                    Check out my <Link href="/resume" className="text-dark-blue" target="_blank" rel="noopener noreferrer">resume</Link> and <Link href="#samples" className="text-light-purple" target="_blank" rel="noopener noreferrer">work samples</Link>.
                                </p>
                                <Button className="bg-purple"><Link href="#contact" className="text-white">Contact Me</Link></Button>
                                
                                    
                            </div>
                            <div className="flex-column">
                                <Image src="/images/john-keyes-pfp.jpg" alt="John Keyes" width="64" height="64" />
                                <p className="p">
                                    <DownloadIcon href="/docs/john_keyes_resume.docx"/>
                                </p>  
                            </div>  
                        </div>
                    </SubTitle>
            </div>
            <div className="bg-white text-text home-section-padding">
                <div className="flex flex-column content-container">
                    <SubTitle id="samples" text="Samples">
                        <h3><Link href="https://github.com/John-Keyes" className="text-blue" target="_blank" rel="noopener noreferrer">Github</Link></h3>
                        <p className="p">
                            These are samples that I have worked on completely by myself, or in a team.
                        </p>
                        <p className="p">
                            <Link href="/samples" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                        <h3><Link href="https://github.com/John-Keyes" className="text-blue" target="_blank" rel="noopener noreferrer">Work In Teams</Link></h3>
                    </SubTitle>  
                </div>
            </div>
            <div className="bg-gray home-section-padding">
                <div className="flex flex-column content-container">
                    <SubTitle id="endorsements" text="Endorsements Received">
                        <Endorsement
                            person="Matthew Garrepy"
                            personLink="https://www.linkedin.com/in/mattgarrepy/"
                            text="John is a natural learner. While managing him through a complex app rebuild in React, 
                                he quickly absorbed our practices, guided his way through the requirements, and produced 
                                excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                                aptitude to absorb new systems quickly and cogently.John is a fantastic resource for any digital organization looking to scale a project quickly 
                                with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                                collaborates well with other team members."
                            className="bg-dark-gray space-above"
                        />
                        <Endorsement
                            person="Luis G. Sanchez"
                            personLink="https://www.linkedin.com/in/luisgustavosc/"
                            text="John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                    app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                    matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                    asset to any team."
                                    className="bg-dark-gray space-above"
                        />
                    </SubTitle>
                    </div>
                </div>
                    </div>
                    <Contact/>
            </div>
    );
}

export default Home;