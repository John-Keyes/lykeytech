import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Title from 'src/components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
import Button from 'src/components/button';

const About: NextPage = () => (
        <div className="flex flex-column content-container">
                <Title className="text-color2" text="About" />
                    <SubTitle id="overview" text="Overview">
                        <p className="p">
                            LyKeyTech is
                        </p>
                        </SubTitle>
                    <SubTitle id="our-goals" text="Our Goals">
                            <p className="p">
                                Our goal is to provide quality 
                            </p>
                            <p className="p">
                                LyKeyTech
                            </p>
                    </SubTitle>
                    <SubTitle id="people" text="People">
                        <h3><Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link></h3>
                        <p className="p">
                            John Keyes is the Engineer and Owner of LyKeyTech
                        </p>
                        <p className="p">
                            <Link href="/portfolio/resume" className="text-darker-bg" target="_blank" rel="noopener noreferrer">Preview Resume</Link>.
                        </p>
                        <p className="p">
                            <Button id="join-button-home" className="join-button rounded-md border border-white rounded-sm">
                                <span className="button-text">Download</span>
                            </Button>
                        </p>    
                    </SubTitle>
        </div>           
            
);

About.getInitialProps = async () => {
    return {
        pageTitle: "About LyKey",
        pageDescription: "John Keyes About | LyKey Tech"
    }
}
export default About;