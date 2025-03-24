import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Title from 'src/components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
import Button from 'src/components/button';

const People: NextPage = () => (
        <div className="flex flex-column content-container">
                <Title className="text-color2" text="People" />
                    <SubTitle id="john-keyes" text={<Link href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="text-blue" target="_blank" rel="noopener noreferrer">John Keyes</Link>}>
                        <p className="p">
                            John Keyes is the Owner of LyKeyTech, he is an application developer
                        </p>
                        <p className="p">
                            <Link href="/portfolio/resume" className="text-darker-bg" target="_blank" rel="noopener noreferrer">Preview Resume</Link>.
                        </p>
                        <p className="p">
                            <Button id="join-button-home" className="join-button rounded-md border border-white rounded-sm">
                                <span className="button-text">Download</span>
                            </Button>
                        </p>    
                        <p className="p">
                            <Link href="/portfolio/samples" className="text-darker-bg" target="_blank" rel="noopener noreferrer">Work Samples</Link>.
                        </p>    
                    </SubTitle>
        </div>           
            
);

People.getInitialProps = async () => {
    return {
        pageTitle: "People LyKey",
        pageDescription: "John Keyes People | LyKeyTech"
    }
}
export default People;