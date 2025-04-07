import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/layout/endorsement';
import Socials from 'src/components/layout/socials';
import PopMenu from 'src/components/popMenu';
import Card from 'src/components/card';
import Tag from 'src/components/tag';
import About from 'src/components/layout/about';
import { starter1, starter2, starter3, starter4 } from 'src/lib/static';

const Home: NextPage = () => {
    return (
            <div id="home">
                <div className="content-container content-container-padding flex flex-row">
                    <About/>
                </div>
            <div className="home-section-padding border-top border-top-3 border-top-light-purple">
                <div className="flex flex-column content-container">
                <SubTitle id="samples" text="Samples">
                        <div className="flex flex-column flex-center">
                            <h3>Work In Teams</h3>
                            <Card className="bg-text flex flex-row flex-center border-top border-top-5 border-top-light-blue card-hover-blue card-between">
                                <Link href="https://cmscritic.com" target="_blank" rel="noopener noreferrer">
                                    <img src={starter2} className="space-above border border-light-blue button-glow-blue" alt="CMSCritic" width="350" height="190"/>
                                </Link>
                                <div className="space-above flex flex-column text-end text-center-lg width-half">
                                    <h4>
                                        <Link href="https://cmscritic.com" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">
                                            CMSCritic
                                        </Link>
                                    </h4>
                                    <p className="p">
                                        While working for <Link href="https://www.solodev.com" className="text-white text-hover-card-blue" target="_blank" rel="noopener noreferrer">Solodev</Link>, we made a news site.
                                    </p>
                                    <p className="p"> 
                                                    <Tag className="tag-blue" href="https://nextjs.org/" text="Next"/>
                                                    <Tag className="tag-blue space-infront" href="https://sequelize.org/" text="Sequelize"/>
                                                    <Tag className="tag-blue space-infront" href="https://nodejs.org/" text="Node"/>
                                                    <Tag className="tag-blue space-infront" href="https://aws.amazon.com/cloudformation/" text="AWS Cloudformation"/>
                                                    <Tag className="tag-blue space-infront" href="https://aws.amazon.com/s3/" text="AWS S3"/>
                                                    <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                                    <Tag className="tag-blue space-infront" href="https://redis.io/" text="Redis"/>
                                                    <Tag className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                                </p>
                                </div>
                            </Card>
                            <Card className="flex flex-row flex-center card-space-above border-top border-top-5 border-top-light-purple card-hover-purple card-between">
                                <div className="space-above flex flex-column text-start width-half">
                                    <h4>
                                        <Link className="text-white text-hover-lighter-purple" href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                                        MySELENA Application
                                        </Link>
                                    </h4>
                                    <p className="p">
                                        SELENA is a mobile application that contains a curriculum for instructors to educate K-12 students on their emotions. These lessons are also on their <Link href="https://mylearningtools.org/" className="cursor-pointer text-white text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">website</Link>.
                                    </p>
                                    <p className="p">
                                    Available on <Link href="https://apps.apple.com/us/app/my-selena/id1504764818" className="cursor-pointer text-white text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">App Store</Link> and <Link href="https://play.google.com/store/apps/details?id=org.mylearningtools.app&hl=en_US&pli=1" className="cursor-pointer text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Google Play</Link>.
                                    </p>
                                    <p className="p">
                                        <Tag className="tag-purple" href="https://reactnative.dev/" text="React Native"/>
                                        <Tag className="tag-purple space-infront" href="https://expo.dev/" text="Expo"/>
                                        <Tag className="tag-purple space-infront" href="https://nodejs.org/" text="Node"/>
                                        <Tag className="tag-purple space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                        <Tag className="tag-purple space-infront" href="https://developer.android.com/studio" text="Android Studio"/>
                                        <Tag className="tag-purple space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                    </p>
                                </div>
                                <Link href="https://github.com/John-Keyes/lykey-rest-api" target="_blank" rel="noopener noreferrer">
                                    <img src={starter4} className="rounded-pfp space-above border border-light-purple button-glow-purple" alt="MySELENA" width="150" height="150"/>
                                </Link>
                            </Card>
                            <Card className="bg-text flex flex-row flex-center border-top border-top-5 border-top-light-blue card-hover-blue card-space-above space-below card-between">
                                <PopMenu trigger={<iframe className="space-above border border-light-blue button-glow-blue" width="300" height="190" src="https://www.youtube.com/embed/Jrz03x38rs8" />}>                               
                                    <Link href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                        <span className="fa-solid fa-up-right-from-square text-white text-hover-clear-blue"/>
                                    </Link>
                                </PopMenu>
                                <div className="flex flex-column text-end width-half space-above">
                                    <h4>
                                        <Link className="text-white text-hover-clear-blue" href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                            USICK
                                        </Link>
                                    </h4>
                                    <p className="p">
                                        <Tag className="tag-blue" href="https://svelte.dev/" text="Svelte"/>
                                        <Tag className="tag-blue space-infront" href="https://learn.microsoft.com/en-us/dotnet/csharp/" text="C#"/>
                                        <Tag className="tag-blue space-infront" href="https://dotnet.microsoft.com/en-us/" text="Dotnet"/>
                                        <Tag className="tag-blue space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                        <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                        <Tag className="tag-blue space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                    </p>
                                </div>
                            </Card>
                        </div>
                        <div className="flex flex-column flex-center">
                        <h3><Link href="https://github.com/John-Keyes" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Github</Link></h3>
                            <Card className="flex flex-row flex-center card-space-above border-top border-top-5 border-top-light-purple card-hover-purple card-between">
                                <div className="space-above flex flex-column text-start width-half">
                                    <h4>
                                        <Link className="text-white text-hover-lighter-purple" href="https://github.com/John-Keyes/lykey-rest-api" target="_blank" rel="noopener noreferrer">
                                            lykey-restapi
                                        </Link>
                                    </h4>
                                    <p className="p">In this project, I setup authentication and authorization on the backend.</p>
                                    <p className="p">
                                        <Tag className="tag-purple" href="https://www.python.org/" text="Python"/>
                                        <Tag className="tag-purple space-infront" href="https://fastapi.tiangolo.com/" text="FastAPI"/>
                                        <Tag className="tag-purple space-infront" href="https://github.com/astral-sh/uv" text="UV"/>
                                        <Tag className="tag-purple space-infront" href="https://www.sqlalchemy.org/"  text="SQLAlchemy"/>
                                        <Tag className="tag-purple space-infront" href="https://www.mysql.com/"  text="MySQL"/>
                                        <Tag className="tag-purple space-infront" href="https://redis.io/"  text="Redis"/>
                                        <Tag className="tag-purple space-infront" href="https://alembic.sqlalchemy.org/"  text="Alembic"/>
                                        <Tag className="tag-purple space-infront" href="https://sass-lang.com/"  text="SCSS"/>
                                        <Tag className="tag-purple space-infront" href="https://docs.python.org/3/library/venv.html"  text="VENV"/>
                                    </p>
                                </div>
                                <Link href="https://github.com/John-Keyes/lykey-rest-api" target="_blank" rel="noopener noreferrer">
                                    <img className="space-above card-img-blur border border-light-purple button-glow-purple" src={starter1} alt="REST API" width="250" height="300"/>
                                </Link>
                            </Card>
                            <Card className="bg-text flex flex-row flex-center card-space-above space-below card-between border-top border-top-5 border-top-light-blue card-hover-blue"> 
                                <Link href="https://github.com/John-Keyes/task-frontend" target="_blank" rel="noopener noreferrer">
                                    <img src={starter3} className="space-above border border-light-blue button-glow-blue" alt="task" width="300" height="190"/>
                                </Link>
                                <div className="space-above flex flex-column text-end width-half">        
                                    <h4> 
                                        <Link href="https://github.com/John-Keyes/task-frontend" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">task-frontend</Link> & <Link href="https://github.com/John-Keyes/task-backend" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">task-backend</Link>
                                    </h4>
                                    <p className="p">The combination of the task-frontend & task-backend is just a project that shows people I am knowledgable on how full stack development works.</p>
                                    <p className="p">
                                        <Tag className="tag-blue" href="https://nextjs.org/" text="Next"/>
                                        <Tag className="tag-blue space-infront" href="https://www.prisma.io/" text="Prisma"/>
                                        <Tag className="tag-blue space-infront" href="https://nodejs.org/" text="Node"/>
                                        <Tag className="tag-blue space-infront" href="https://expressjs.com/" text="Express"/>
                                        <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                        <Tag className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                        <Tag className="tag-blue space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                    </p>
                                </div>
                            </Card>  
                        </div>
                    </SubTitle>
                </div>
            </div>
            <div className="home-section-padding border-top border-top-3 border-top-light-purple">
                <div className="flex flex-column content-container">
                    <SubTitle id="endorsements" text={<Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/#recommendations" target="_blank" rel="noopener noreferrer">Endorsements Received</Link>}>
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
                                className="space-above border-top border-top-5 border-top-light-purple bg-dark-purple card-hover-purple"
                            />
                            <Endorsement
                                person="Luis G. Sanchez"
                                personLink="https://luisgustavosc.com/"
                                text="John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                        app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                        matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                        asset to any team."
                                        className="space-above border-top border-top-5 border-top-light-blue bg-text card-hover-blue"
                            />
                        </div>
                    </SubTitle>
                    </div>
                </div>
                <div className="home-section-padding border-top border-top-3 border-top-light-purple">
                    <div className="content-container overflow-hidden flex flex-center flex-column">
                        <Socials/>
                    </div>
                </div>
            </div>
    );
}

export default Home;