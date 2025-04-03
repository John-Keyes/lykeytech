import React from 'react';
import {useRouter} from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link';
import Title from '../components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/layout/endorsement';
import Button from 'src/components/button';
import Image from 'next/image';
import Socials from 'src/components/layout/socials';
import DownloadHeader from 'src/components/download/downloadHeader';
import DownloadIcon from 'src/components/download/downloadIcon';
import PopMenu from 'src/components/popMenu';
import Card from 'src/components/card';
import Tag from 'src/components/tag';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const Home: NextPage = () => {
    return (
            <div id="home">
                <div className="bg-dark-gray">
                <div className="content-container content-container-padding card-divider flex flex-row">
                <Card className="flex-column border-top border-top-5 border-top-dark-purple bg-light-gray">
                    <div className="flex flex-center flex-row">
                        <Title id="about" text="Hello!" className="fit-width text-light-purple"/>
                        <Image src="/images/john-keyes-pfp.png" alt="John Keyes" className="rounded-pfp" width="100" height="100" />
                    </div>
                    <SubTitle id="hello" text={<span>My name is <Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></span>}>
                                <h3>
                                    I build web and mobile applications that help fulfill any need. 
                                    I build applications with immersive user experiences and performance efficient applications.
                                    Check out my <Link href="/resume" className="text-dark-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">resume</Link> and <Link href="#samples" className="text-dark-purple text-hover-light-purple" target="_blank" rel="noopener noreferrer">work samples</Link>.
                                </h3>    
                                <DownloadIcon className="bg-dark-blue bg-hover-clear-blue" href="/docs/john_keyes_resume.docx"><span className="space-infront">Download Resume</span></DownloadIcon>
                    </SubTitle>
                </Card> 
                </div>
            <div className="bg-dark-purple home-section-padding border-top border-top-3 border-top-light-purple">
                <div className="flex flex-column content-container">
                    <SubTitle id="samples" text="Samples">
                        <Card className="bg-text">
                        <h3><Link href="https://github.com/John-Keyes" className="text-dark-blue text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Github</Link></h3>
                        <h4>lykey-restapi</h4>
                            <p className="p">This project shows how to setup authentication and authorization the backend.</p>
                            <p className="p tag-gap">
                                <span>Tools:</span>
                                <Tag href="https://www.python.org/" text="Python"/>
                                <Tag href="https://fastapi.tiangolo.com/" text="FastAPI"/>
                                <Tag href="https://github.com/astral-sh/uv" text="UV"/>
                                <Tag href="https://www.sqlalchemy.org/"  text="SQLAlchemy"/>
                                <Tag href="https://www.mysql.com/"  text="MySQL"/>
                                <Tag href="https://redis.io/"  text="Redis"/>
                                <Tag href="https://alembic.sqlalchemy.org/"  text="Alembic"/>
                                <Tag href="https://sass-lang.com/"  text="SCSS"/>
                                <Tag href="https://docs.python.org/3/library/venv.html"  text="VENV"/>
                            </p>
                                          
                            <h4>task-frontend & task-backend</h4>
                                <p className="p">The combination of the task-frontend & task-backend is just a project that shows people I am knowledgable on how full stack development works.</p>
                                <p className="p tag-gap">
                                    <Tag href="https://nextjs.org/" text="Next"/>
                                    <Tag href="https://www.prisma.io/" text="Prisma"/>
                                    <Tag href="https://nodejs.org/" text="Node"/>
                                    <Tag href="https://expressjs.com/" text="Express"/>
                                    <Tag href="https://www.docker.com/" text="Docker"/>
                                    <Tag href="https://sass-lang.com/" text="SCSS"/>
                                    <Tag href="https://www.mysql.com/" text="MySQL"/>
                                </p>
                        </Card>
                        <Card className="bg-text space-above rounded-sm">
                        <p className="p">
                            <Link href="/samples" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                        <h3><Link href="https://github.com/John-Keyes" className="text-blue" target="_blank" rel="noopener noreferrer">Work In Teams</Link></h3>
                        </Card>
                    </SubTitle>
                    
                </div>
            </div>
            <div className="bg-dark-gray home-section-padding border-top border-top-3 border-top-light-purple">
                <div className="flex flex-column content-container">
                    <SubTitle id="endorsements" text="Endorsements Received">
                        {/*<CarouselProvider className="fit-width fit-height" totalSlides={2}>
                            <Slider>
                                <Slide index={0}>I am the first Slide.</Slide>
                                <Slide index={1}>I am the second Slide.</Slide>
                                <Slide index={2}>I am the third Slide.</Slide>
                            </Slider>
                        </CarouselProvider>*/}
                        <div className="flex flex-row card-divider">
                        <Endorsement
                            person="Matthew Garrepy"
                            personLink="https://www.linkedin.com/in/mattgarrepy/"
                            text="John is a natural learner. While managing him through a complex app rebuild in React, 
                                he quickly absorbed our practices, guided his way through the requirements, and produced 
                                excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                                aptitude to absorb new systems quickly and cogently.John is a fantastic resource for any digital organization looking to scale a project quickly 
                                with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                                collaborates well with other team members."
                            className="space-above border-top border-top-5 border-top-dark-purple bg-light-gray"
                        />
                        <Endorsement
                            person="Luis G. Sanchez"
                            personLink="https://www.linkedin.com/in/luisgustavosc/"
                            text="John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                    app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                    matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                    asset to any team."
                                    className="space-above border-top border-top-5 border-top-dark-purple bg-light-gray"
                        />
                        </div>
                    </SubTitle>
                    </div>
                </div>
                    </div>
                    <Socials/>
            </div>
    );
}

export default Home;