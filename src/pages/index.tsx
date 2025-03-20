import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import { NextPage } from 'next';
import Button from '../components/button';
import Link from 'next/link';
import Title from '../components/layout/title';
import SubTitle from 'src/components/layout/subTitle';

const Home: NextPage = () => {
    const {push, reload} = useRouter();
    return (
        <div id="home">
            <div id="welcome-section" className="flex flex-center content-container">
                <div id="desc-container" className="flex flex-column">
                    {/*<Carousel/>*/}
                </div>
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
                            <Link href="/portfolio/people" className="text-blue" target="_blank" rel="noopener noreferrer">{"Read More >>"}</Link>
                        </p>
                    </SubTitle>     
            </div>
        </div>
    );
}

export default Home;