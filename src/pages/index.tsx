import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import { NextPage } from 'next';
import Button from '../components/button';
import Link from 'next/link';
import Title from '../components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/endorsement';

const Home: NextPage = () => {
    const {push, reload} = useRouter();
    return (
        <div id="home">
            <div id="welcome-section" className="flex flex-center content-container">                
                {/*<Carousel/>*/}
                <div className="border border-text carousel-"/>
            </div>
            <div className="flex flex-column content-container">
                <Title id="lkeytechllc-title" text="LyKeyTech" className="fit-width"/>
                    <SubTitle id="about-lykeytechllc" text="About LKeyTech LLC">
                        <p className="p">
                            LyKeyTech is I build 
                        </p>
                        <p className="p">
                            <Link href="/about" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                    </SubTitle>
                    <SubTitle id="samples" text="Samples">
                        <p className="p">
                            These are projects that th, or in a team with other professionals.
                        </p>
                        <p className="p">
                            <Link href="/portfolio/samples" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                    </SubTitle>
                    <SubTitle id="people" text="People">
                        <p className="p">
                            Who is behind this?
                        </p>
                        <p className="p">
                            <Link href="/people" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                    </SubTitle>    
                    <SubTitle id="endorsements-received" text="Endorsements Received">
                        <Endorsement
                            person="Matthew Garrepy"
                            personLink="https://www.linkedin.com/in/mattgarrepy/"
                            
                        >
                            <p className="p">
                                &quot;John is a natural learner. While managing him through a complex app rebuild in React, 
                                he quickly absorbed our practices, guided his way through the requirements, and produced 
                                excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                                aptitude to absorb new systems quickly and cogently.John is a fantastic resource for any digital organization looking to scale a project quickly 
                                with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                                collaborates well with other team members.&quot;
                            </p>
                        </Endorsement>
                        <Endorsement
                            person="Luis G. Sanchez"
                            personLink="https://www.linkedin.com/in/luisgustavosc/"
                        >
                            <section
                                >
                                <p className="p">
                                    &quot;John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                    app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                    matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                    asset to any team.&quot;
                                </p>
                            </section>
                        </Endorsement>
                    </SubTitle>
            </div>
        </div>
    );
}

export default Home;