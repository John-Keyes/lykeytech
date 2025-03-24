import React, { ReactNode } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Title from 'src/components/layout/title';
import SubTitle from 'src/components/layout/subTitle';
//#0c0711
const Endorsement = ({person, personLink, children}: {person: string, personLink: string, children: ReactNode}) => (
    
                    <section>
                        <h3><Link href={personLink} target="_blank" rel="noopener noreferrer">{person}</Link></h3>
                        {children}
                    </section>
            
);

export default Endorsement;