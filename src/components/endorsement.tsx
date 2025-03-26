import React, { ReactNode } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Card from './card';
//#0c0711
const Endorsement = ({person, personLink, text}: {person: string, personLink: string, text: ReactNode}) => (
    
                    <Card>
                        <h3><Link href={personLink} target="_blank" rel="noopener noreferrer">{person}</Link></h3>
                        <p className="p">&quot;{text}&quot;</p>
                    </Card>
            
);

export default Endorsement;