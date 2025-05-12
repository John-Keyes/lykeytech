import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/layout/endorsement';
import Socials from 'src/components/layout/socials';
import PopMenu from 'src/components/popMenu';
import Tag from 'src/components/tag';
import About from 'src/components/layout/about';
import { restApiCS, cmscritic, todoapp, resilience } from 'src/lib/static';
import Sample from 'src/components/layout/sample';
import Loading from 'src/components/layout/loading';

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if(isLoading) {
        return <Loading/>;
    }
    return (
            <div id="home">
                <div className="content-container content-container-padding flex flex-row">
                    <About/>
                </div>
            <div className="home-section-padding">
                <div className="flex flex-column content-container">
                <SubTitle id="samples" text="Samples">
                        <div className="flex flex-column flex-center space-above">
                            <Sample 
                                cardMedia={
                                    <Link href="https://cmscritic.com" target="_blank" rel="noopener noreferrer">
                                        <img src={cmscritic} className="space-above border border-light-blue button-glow-blue" alt="CMSCritic" width="350" height="190"/>
                                    </Link>
                                } 
                                sampleTitle={
                                    <h3>
                                        <Link href="https://cmscritic.com" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">
                                            CMSCritic
                                        </Link>
                                    </h3>
                                }
                                className="card-blue"
                                flexDesktopDirection="row"
                            >
                                <p className="p">
                                            Collaborators: <Link href="https://www.linkedin.com/in/mattgarrepy/" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Matthew Garrepy</Link> and <Link href="https://luisgustavosc.com/" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Luis G. Sanchez</Link>.
                                        </p>
                                        <p className="p">
                                            At <Link href="https://www.solodev.com" className="text-white text-hover-card-blue" target="_blank" rel="noopener noreferrer">Solodev</Link>, I helped update the cmscritic website. This is a place where registered critics publish news articles on content strategies and technology in general.
                                        </p>
                                        <p className="p tag-p"> 
                                                        <Tag className="tag-blue" href="https://nextjs.org/" text="Next"/>
                                                        <Tag className="tag-blue space-infront" href="https://sequelize.org/" text="Sequelize"/>
                                                        <Tag className="tag-blue space-infront" href="https://nodejs.org/" text="Node"/>
                                                        <Tag className="tag-blue space-infront" href="https://aws.amazon.com/cloudformation/" text="AWS Cloudformation"/>
                                                        <Tag className="tag-blue space-infront" href="https://aws.amazon.com/s3/" text="AWS S3"/>
                                                        <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                                        <Tag className="tag-blue space-infront" href="https://redis.io/" text="Redis"/>
                                                        <Tag className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                                        <Tag className="tag-blue space-infront" href="https://www.typescriptlang.org/" text="TypeScript"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <Link href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                                        <img src={resilience} className="rounded-pfp space-above border border-light-purple button-glow-purple" alt="MySELENA" width="150" height="150"/>
                                    </Link>
                                }
                                sampleTitle={
                                    <h3>
                                        <Link className="text-white text-hover-lighter-purple" href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                                            MySELENA Application
                                        </Link>
                                    </h3>
                                }
                                className="card-purple"
                                flexDesktopDirection="reverse"
                            >
                                <p className="p">
                                    I worked on a mobile application that contained the SELENA curriculum for instructors to educate K-12 students on their emotions. These lessons are also on their <Link href="https://mylearningtools.org/" className="cursor-pointer text-white text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">website</Link>.
                                </p>
                                <p className="p">
                                    Collaborators: The SELENA Application Development Team
                                </p>
                                <p className="p">
                                    Available on <Link href="https://apps.apple.com/us/app/my-selena/id1504764818" className="cursor-pointer text-white text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">App Store</Link> and <Link href="https://play.google.com/store/apps/details?id=org.mylearningtools.app&hl=en_US&pli=1" className="cursor-pointer text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Google Play</Link>.
                                </p>
                                <p className="p tag-p">
                                    <Tag className="tag-purple" href="https://reactnative.dev/" text="React Native"/>
                                    <Tag className="tag-purple space-infront" href="https://expo.dev/" text="Expo"/>
                                    <Tag className="tag-purple space-infront" href="https://nodejs.org/" text="Node"/>
                                    <Tag className="tag-purple space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                    <Tag className="tag-purple space-infront" href="https://developer.android.com/studio" text="Android Studio"/>
                                    <Tag className="tag-purple space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <PopMenu trigger={<iframe className="space-above border border-light-blue button-glow-blue" width="300" height="190" src="https://www.youtube.com/embed/Jrz03x38rs8" />}>                               
                                        <Link href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                            <span className="fa-solid fa-up-right-from-square text-white text-hover-clear-blue"/>
                                        </Link>
                                    </PopMenu>
                                }
                                sampleTitle={
                                    <h3>
                                        <Link className="text-white text-hover-clear-blue" href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                            USICK.com
                                        </Link>
                                    </h3>
                                }
                                className="card-blue"
                                flexDesktopDirection="row"
                            >
                                <p className="p">
                                    USICK.com is a resource where a person that is feeling unwell can enter the symptoms they are experiencing into a form. We use the APIMedic's symptom-checker API to retreive a list of possible medical issues based on those symptoms. We also utilized the Geolocation API and Google Map's "Place API" to display the address of each medical center within a 10 mile radius of the user's location.
                                </p>
                                <p className="p">
                                    Collaborators: Software Engineering classmates
                                </p>
                                <p className="p tag-p">
                                    <Tag className="tag-blue" href="https://svelte.dev/" text="Svelte"/>
                                    <Tag className="tag-blue space-infront" href="https://learn.microsoft.com/en-us/dotnet/csharp/" text="C#"/>
                                    <Tag className="tag-blue space-infront" href="https://dotnet.microsoft.com/en-us/" text="Dotnet"/>
                                    <Tag className="tag-blue space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                    <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                    <Tag className="tag-blue space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <Link href="https://github.com/John-Keyes/lykey-rest-api" target="_blank" rel="noopener noreferrer">
                                        <img className="space-above card-img-blur border border-light-purple button-glow-purple" src={restApiCS} alt="REST API" width="250" height="300"/>
                                    </Link>
                                }
                                sampleTitle={
                                    <h3>
                                        <Link className="text-white text-hover-lighter-purple" href="https://github.com/John-Keyes/lykey-rest-api" target="_blank" rel="noopener noreferrer">
                                            REST-API
                                        </Link>
                                    </h3>
                                }
                                className="card-purple"
                                flexDesktopDirection="reverse"
                            >
                                <p className="p">A REST-API template that has authentication, authorization, user, and user posession functionality. The next features are still under construction.</p>
                                    <p className="p tag-p">
                                        <Tag className="tag-purple" href="https://www.python.org/" text="Python"/>
                                        <Tag className="tag-purple space-infront" href="https://fastapi.tiangolo.com/" text="FastAPI"/>
                                        <Tag className="tag-purple space-infront" href="https://github.com/astral-sh/uv" text="UV"/>
                                        <Tag className="tag-purple space-infront" href="https://www.sqlalchemy.org/"  text="SQLAlchemy"/>
                                        <Tag className="tag-purple space-infront" href="https://www.mysql.com/"  text="MySQL"/>
                                        <Tag className="tag-purple space-infront" href="https://redis.io/"  text="Redis"/>
                                        <Tag className="tag-purple space-infront" href="https://alembic.sqlalchemy.org/"  text="Alembic"/>
                                        <Tag className="tag-purple space-infront" href="https://sass-lang.com/"  text="SCSS"/>
                                        <Tag className="tag-purple space-infront" href="https://docs.python.org/3/library/venv.html"  text="VENV"/>
                                        <Tag className="tag-purple space-infront" href="https://swagger.io/tools/swagger-ui/"  text="Swagger"/>                               
                                    </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <Link href="https://github.com/John-Keyes/task-frontend" target="_blank" rel="noopener noreferrer">
                                        <img src={todoapp} className="space-above border border-light-blue button-glow-blue" alt="task" width="300" height="190"/>
                                    </Link>
                                }
                                sampleTitle={<h3>TODO APP</h3>}
                                className="card-blue"
                                flexDesktopDirection="row"
                            >
                                <p className="p"><Link href="https://github.com/John-Keyes/task-frontend" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">"task-frontend"</Link> & <Link href="https://github.com/John-Keyes/task-backend" className="text-white text-hover-clear-blue" target="_blank" rel="noopener noreferrer">"task-backend"</Link> are repositories that make up a small full stack TODO Application.</p>
                                    <p className="p tag-p">
                                        <Tag className="tag-blue" href="https://nextjs.org/" text="Next"/>
                                        <Tag className="tag-blue space-infront" href="https://www.prisma.io/" text="Prisma"/>
                                        <Tag className="tag-blue space-infront" href="https://nodejs.org/" text="Node"/>
                                        <Tag className="tag-blue space-infront" href="https://expressjs.com/" text="Express"/>
                                        <Tag className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                        <Tag className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                        <Tag className="tag-blue space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                        <Tag className="tag-blue space-infront" href="https://www.typescriptlang.org/" text="TypeScript"/>
                                    </p>
                            </Sample>
                        </div>
                    </SubTitle>
                </div>
            </div>
            <div className="home-section-padding">
                <div className="flex flex-column content-container">
                    <SubTitle id="endorsements" text={<Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/#recommendations" className="text-white" target="_blank" rel="noopener noreferrer">Endorsements Received</Link>}>
                        <div className="flex flex-row card-divider">
                            <Endorsement
                                person="Matthew Garrepy"
                                personLink="https://www.linkedin.com/in/mattgarrepy/"
                                hoverColor="lighter-purple"
                                text="John is a natural learner. While managing him through a complex app rebuild in React, 
                                    he quickly absorbed our practices, guided his way through the requirements, and produced 
                                    excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                                    aptitude to absorb new systems quickly and cogently.John is a fantastic resource for any digital organization looking to scale a project quickly 
                                    with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                                    collaborates well with other team members."
                                className="space-above card-purple width-half"
                            />
                            <Endorsement
                                person="Luis G. Sanchez"
                                personLink="https://luisgustavosc.com/"
                                hoverColor="clear-blue"
                                text="John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                        app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                        matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                        asset to any team."
                                className="space-above card-blue width-half"
                            />
                        </div>
                    </SubTitle>
                    </div>
                </div>
                <div className="home-section-padding">
                    <div className="content-container overflow-hidden flex flex-center flex-column">
                        <Socials/>
                    </div>
                </div>
            </div>
    );
}

export default Home;