import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import SubTitle from 'src/components/layout/subTitle';
import Endorsement from 'src/components/layout/endorsement';
import Socials from 'src/components/layout/socials';
import PopMenu from 'src/components/popMenu';
import Tag from 'src/components/tag';
import About from 'src/components/layout/about';
import { codeCS, cmscritic, todoapp, resilience } from 'src/lib/helpers/static';
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
                <div id="about-container" aria-label="About Container" className="content-container content-container-padding flex flex-row">
                    <About/>
                </div>
            <div id="samples-divider" aria-label="Work Samples Divider" className="home-section-padding">
                <div id="samples-container" aria-label="Work Samples Container" className="flex flex-column content-container">
                    <SubTitle id="samples" aria-Label="Work Samples" text="Samples">
                        <div className="flex flex-column flex-center space-above">
                            <Sample 
                                cardMedia={
                                    <Link id="cmscritic-card-media-link" aria-label="CMSCritic Sample Card Media Link" title="CMSCritic Sample Card Media Link" href="https://cmscritic.com" target="_blank" rel="noopener noreferrer">
                                        <img id="cmscritic-card-media-image" aria-label="CMSCritic Sample Card Media Image" src={cmscritic} className="space-above border border-light-blue button-glow-blue" alt="CMSCritic Media Website" width="350" height="190"/>
                                    </Link>
                                } 
                                sampleTitle={
                                    <h3 id="cmscritic-sample-title" aria-label="CMSCritic Sample Title">
                                        <Link id="cmscritic-sample-title-link" aria-label="CMSCritic Sample Title Link" title="CMSCritic Sample Title Link" href="https://cmscritic.com" className="text-hover-clear-blue" target="_blank" rel="noopener noreferrer">
                                            CMSCritic
                                        </Link>
                                    </h3>
                                }
                                className="card-blue"
                                flexDesktopDirection="row"
                                id="cmscritic-sample" 
                                aria-label="CMSCritic Sample"
                            >
                                <p id="cmscritic-sample-collaborators" aria-label="CMSCritic Sample Collaborators" className="p">
                                            Collaborators: <Link href="https://www.linkedin.com/in/mattgarrepy/" title="Matt Gareppy Link" className="text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Matthew Garrepy</Link> and <Link href="https://luisgustavosc.com/" title="Luis Gustavo Link" className="text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Luis G. Sanchez</Link>.
                                        </p>
                                        <p id="cmscritic-sample-description" aria-label="CMSCritic Sample Description" className="p">
                                            At <Link id="cmscritic-sample-description-link" aria-label="CMSCritic Sample Description Link" href="https://www.solodev.com" title="Link to solodev website" className="text-hover-card-blue" target="_blank" rel="noopener noreferrer">Solodev</Link>, I helped update the cmscritic website. This is a place where registered critics publish news articles on content strategies and technology in general.
                                        </p>
                                        <p id="cmscritic-sample-skills" aria-label="CMSCritic Sample Skills" className="p tag-p"> 
                                                        <Tag id="cmscritic-react" aria-label="CMSCritic React Skill" className="tag-blue" href="https://react.dev/" text="React"/> 
                                                        <Tag id="cmscritic-next" aria-label="CMSCritic Next Skill" className="tag-blue space-infront" href="https://nextjs.org/" text="Next"/>
                                                        <Tag id="cmscritic-sequelize" aria-label="CMSCritic Sequelize Skill" className="tag-blue space-infront" href="https://sequelize.org/" text="Sequelize"/>
                                                        <Tag id="cmscritic-node" aria-label="CMSCritic Node Skill" className="tag-blue space-infront" href="https://nodejs.org/" text="Node"/>
                                                        <Tag id="cmscritic-aws-cloudformation" aria-label="CMSCritic AWS Cloudformation v" className="tag-blue space-infront" href="https://aws.amazon.com/cloudformation/" text="AWS Cloudformation"/>
                                                        <Tag id="cmscritic-aws-s3" aria-label="CMScritic AWS S3 Skill" className="tag-blue space-infront" href="https://aws.amazon.com/s3/" text="AWS S3"/>
                                                        <Tag id="cmscritic-docker" aria-label="CMSCritic Docker Skill" className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                                        <Tag id="cmscritic-redis" aria-label="CMSCritic Redis Skill" className="tag-blue space-infront" href="https://redis.io/" text="Redis"/>
                                                        <Tag id="cmscritic-scss" aria-label="CMSCritic SCSS Skill" className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                                        <Tag id="cmscritic-typescript" aria-label="CMSCritic TypeScript Skill" className="tag-blue space-infront" href="https://www.typescriptlang.org/" text="TypeScript"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <Link id="selena-card-media-link" aria-label="SELENA Card Media Link" title="SELENA Card Media Link" href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                                        <img id="selena-card-media-image" aria-label="SELENA Card Media Image" src={resilience} className="rounded-pfp space-above border border-light-purple button-glow-purple" alt="Resilience logo" width="150" height="150"/>
                                    </Link>
                                }
                                sampleTitle={
                                    <h3 id="selena-sample-title" aria-label="SELENA Sample Title">
                                        <Link id="selena-sample-title-link" aria-label="SELENA Sample Title Link" title="SELENA Sample Title Link" className="text-hover-lighter-purple" href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                                            MySELENA Application
                                        </Link>
                                    </h3>
                                }
                                className="card-purple"
                                flexDesktopDirection="reverse"
                                id="selena-sample" 
                                aria-label="SELENA Sample"
                            >
                                <p id="selena-sample-description" aria-label="SELENA Sample Description" className="p">
                                    I worked on a mobile application that contained the SELENA curriculum for instructors to educate K-12 students on their emotions. These lessons are also on their <Link href="https://mylearningtools.org/" className="cursor-pointer text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">website</Link>.
                                </p>
                                <p id="selena-sample-collaborators" aria-label="SELENA Sample Collaborators" className="p">
                                    Collaborators: The SELENA Application Development Team
                                </p>
                                <p id="selena-sample-links" aria-label="SELENA Sample Links" className="p">
                                    Available on <Link id="selena-sample-app-store-link" aria-label="Selena Sample App Store Link" title="Selena Sample App Store Link" href="https://apps.apple.com/us/app/my-selena/id1504764818" className="cursor-pointer text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">App Store</Link> and <Link id="selena-sample-google-play-link" aria-label="Selena Sample Google Play Link" title="Selena Sample Google Play Link" href="https://play.google.com/store/apps/details?id=org.mylearningtools.app&hl=en_US&pli=1" className="cursor-pointer text-hover-clear-blue" target="_blank" rel="noopener noreferrer">Google Play</Link>.
                                </p>
                                <p id="selena-sample-skills" aria-label="SELENA Sample Skills" className="p tag-p">
                                    <Tag id="selena-react-native" aria-label="SELENA React Native Skill" className="tag-purple" href="https://reactnative.dev/" text="React Native"/>
                                    <Tag id="selena-expo" aria-label="SELENA Expo Skill" className="tag-purple space-infront" href="https://expo.dev/" text="Expo"/>
                                    <Tag id="selena-node" aria-label="SELENA Node Skill" className="tag-purple space-infront" href="https://nodejs.org/" text="Node"/>
                                    <Tag id="selena-mysql" aria-label="SELENA MySQL Skill" className="tag-purple space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                    <Tag id="selena-android-studio" aria-label="SELENA Android Studio Skill" className="tag-purple space-infront" href="https://developer.android.com/studio" text="Android Studio"/>
                                    <Tag id="selena-aws-lambda" aria-label="SELENA AWS Lambda Skill" className="tag-purple space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <PopMenu id="usick-card-media-popmenu" aria-label="USICK Sample Card Media PopMenu" trigger={<iframe className="space-above border border-light-blue button-glow-blue" width="300" height="190" src="https://www.youtube.com/embed/Jrz03x38rs8" />}>                               
                                        <Link title="USICK Card Media Link" href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                            <span className="fa-solid fa-up-right-from-square text-hover-clear-blue"/>
                                        </Link>
                                    </PopMenu>
                                }
                                sampleTitle={
                                    <h3 id="usick-sample-title" aria-label="USICK Sample Title">
                                        <Link id="usick-sample-title-link" aria-label="USICK Sample Title Link" title="USICK Sample Title Link" className="text-hover-clear-blue" href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
                                            USICK.com
                                        </Link>
                                    </h3>
                                }
                                className="card-blue"
                                flexDesktopDirection="row"
                                id="usick-sample" 
                                aria-label="USICK Sample"
                            >
                                <p id="usick-sample-description" aria-label="USICK Sample Description" className="p">
                                    USICK.com is a resource where a person that is feeling unwell can enter the symptoms they are experiencing into a form. We use the APIMedic's symptom-checker API to retreive a list of possible medical issues based on those symptoms. We also utilized the Geolocation API and Google Map's "Place API" to display the address of each medical center within a 10 mile radius of the user's location.
                                </p>
                                <p id="usick-sample-collaborators" aria-label="USICK Sample Collaborators" className="p">
                                    Collaborators: Software Engineering classmates
                                </p>
                                <p id="usick-sample-skills" aria-label="USICK Sample Skills" className="p tag-p">
                                    <Tag id="usick-svelte" aria-label="USICK Svelte Skill" className="tag-blue" href="https://svelte.dev/" text="Svelte"/>
                                    <Tag id="usick-c-sharp" aria-label="USICK C-sharp Skill" className="tag-blue space-infront" href="https://learn.microsoft.com/en-us/dotnet/csharp/" text="C#"/>
                                    <Tag id="usick-dotnet" aria-label="USICK DotNet Skill" className="tag-blue space-infront" href="https://dotnet.microsoft.com/en-us/" text="Dotnet"/>
                                    <Tag id="usick-mysql" aria-label="USICK MySQL Skill" className="tag-blue space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                    <Tag id="usick-docker" aria-label="USICK Docker Skill" className="tag-blue space-infront" href="https://www.docker.com/" text="Docker"/>
                                    <Tag id="usick-aws-lambda" aria-label="USICK AWS Lambda Skill" className="tag-blue space-infront" href="https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/lambda-creating-project-in-visual-studio.html" text="AWS Lambda"/>
                                </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <Link href="https://github.com/John-Keyes/task-frontend" target="_blank" rel="noopener noreferrer" id="todo-app-card-media-link" aria-label="Todo app card media link" title="Todo app card media link">
                                        <img id="todo-app-card-media" aria-label="Todo app card media" src={todoapp} className="space-above border border-light-purple button-glow-purple" alt="task todo" width="300" height="190"/>
                                    </Link>
                                }
                                sampleTitle={<h3 id="todo-app-sample-title" aria-label="Todo app sample title">TODO APP</h3>}
                                className="card-purple"
                                flexDesktopDirection="reverse"
                                id="todo-app-sample" 
                                aria-label="Todo App Sample"
                            >
                                <p id="todo-app-sample-description" aria-label="TODO Sample Description" className="p"><Link href="https://github.com/John-Keyes/task-frontend" className="text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">"task-frontend"</Link> & <Link href="https://github.com/John-Keyes/task-backend" className="text-hover-lighter-purple" target="_blank" rel="noopener noreferrer">"task-backend"</Link> are repositories that make up a small full stack TODO Application.</p>
                                    <p id="todo-app-sample-skills" aria-label="TODO App Sample Skills" className="p tag-p">
                                        <Tag id="todo-app-react" aria-label="Todo app React Skill" className="tag-purple" href="https://react.dev/" text="React"/>
                                        <Tag id="todo-app-next" aria-label="Todo app Next Skill" className="tag-purple space-infront" href="https://nextjs.org/" text="Next"/>
                                        <Tag id="todo-app-prisma" aria-label="Todo app Prisma Skill" className="tag-purple space-infront" href="https://www.prisma.io/" text="Prisma"/>
                                        <Tag id="todo-app-node" aria-label="Todo app Node Skill" className="tag-purple space-infront" href="https://nodejs.org/" text="Node"/>
                                        <Tag id="todo-app-express" aria-label="Todo app Express Skill" className="tag-purple space-infront" href="https://expressjs.com/" text="Express"/>
                                        <Tag id="todo-app-docker" aria-label="Todo app Docker Skill" className="tag-purple space-infront" href="https://www.docker.com/" text="Docker"/>
                                        <Tag id="todo-app-scss" aria-label="Todo app SCSS Skill" className="tag-purple space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                        <Tag id="todo-app-mysql" aria-label="Todo app MySQL Skill" className="tag-purple space-infront" href="https://www.mysql.com/" text="MySQL"/>
                                        <Tag id="todo-app-typescript" aria-label="Todo app TypeScript Skill" className="tag-purple space-infront" href="https://www.typescriptlang.org/" text="TypeScript"/>
                                    </p>
                            </Sample>
                            <Sample
                                cardMedia={
                                    <div id="keysnaps-card-media-container" aria-label="KeySnaps card media container">
                                        <img id="keysnaps-card-media" aria-label="KeySnaps card media" className="space-above card-img-blur border border-light-blue button-glow-blue" src={codeCS} alt="KeySnaps Code" width="250" height="300"/>
                                    </div>
                                }
                                sampleTitle={
                                    <h3 id="keysnaps-sample-title" aria-label="KeySnaps Sample Title">KeySnaps</h3>
                                }
                                className="card-blue"
                                flexDesktopDirection="row"
                                id="keysnaps-sample" 
                                aria-label="KeySnaps Sample"
                            >
                                <p className="p" id="keysnaps-description" aria-label="KeySnaps Description">Coming soon</p>
                                    <p id="keysnaps-sample-skills" aria-label="KeySnaps Sample Skills" className="p tag-p">
                                        <Tag id="keysnaps-svelte" aria-label="KeySnaps Svelte Skill" className="tag-blue" href="https://svelte.dev/" text="Svelte"/>
                                        <Tag id="keysnaps-tauri" aria-label="KeySnaps Tauri Skill" className="tag-blue space-infront" href="https://v2.tauri.app/" text="Tauri"/>
                                        <Tag id="keysnaps-scss" aria-label="KeySnaps SCSS Skill" className="tag-blue space-infront" href="https://sass-lang.com/" text="SCSS"/>
                                        <Tag id="keysnaps-cypress" aria-label="KeySnaps Cypress Skill" className="tag-blue space-infront" href="https://www.cypress.io/ " text="Cypress"/>        
                                        <Tag id="keysnaps-typescript" aria-label="KeySnaps TypeScript Skill" className="tag-blue space-infront" href="https://www.typescriptlang.org/" text="TypeScript"/>                   
                                    </p>
                            </Sample>
                        </div>
                    </SubTitle>
                </div>
            </div>
            <div id="endorsements-divider" aria-label="Endorsements Divider" className="home-section-padding">
                <div id="endorsements-container" aria-label="Endorsements Container" className="flex flex-column content-container">
                    <SubTitle id="endorsements" aria-label="Endorsements" text={<Link id="endorsements-title-link" aria-label="Endorsements Title Link" title="Endorsements Title Link" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/#recommendations" target="_blank" rel="noopener noreferrer">Endorsements Received</Link>}>
                        <div className="flex card-divider flex-column flex-row-md">
                            <Endorsement
                                id="endorsement-matthew-garrepy"
                                aria-label="Endorsment from Matthew Garrepy"
                                person="Matthew Garrepy"
                                personLink="https://www.linkedin.com/in/mattgarrepy/"
                                hoverColor="lighter-purple"
                                text="John is a natural learner. While managing him through a complex app rebuild in React, 
                                    he quickly absorbed our practices, guided his way through the requirements, and produced 
                                    excellent code aligned with our prototypes. Along with his frontend fluency, he brings an 
                                    aptitude to absorb new systems quickly and cogently.John is a fantastic resource for any digital organization looking to scale a project quickly 
                                    with precision. He is diligent, dedicated, and detail-oriented &mdash; and, most importantly, 
                                    collaborates well with other team members."
                                className="space-above card-purple"
                            />
                            <Endorsement
                                id="endorsement-luis-g-sanchez"
                                aria-label="Endorsment from Luis G. Sanchez"
                                person="Luis G. Sanchez"
                                personLink="https://luisgustavosc.com/"
                                hoverColor="clear-blue"
                                text="John is an outstanding developer with a quick ability to adapt and solve problems. During our React 
                                        app rebuild, he rapidly understood our methodologies and delivered high-quality code that perfectly 
                                        matched our prototypes. His thoroughness, commitment, and attention to detail make him a valuable 
                                        asset to any team."
                                className="space-above card-blue"
                            />
                        </div>
                    </SubTitle>
                    </div>
                </div>
                <div id="socials-divider" aria-label="Socials Divider" className="home-section-padding">
                    <div id="socials-container" aria-label="Socials Container" className="content-container overflow-hidden flex flex-center flex-column">
                        <Socials/>
                    </div>
                </div>
            </div>
    );
}

export default Home;