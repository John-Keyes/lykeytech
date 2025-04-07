import React, { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import Card from '../card';

interface EndorsementProps extends ComponentProps<"div">{
    person: string, 
    personLink: string, 
    text: string,
    className?: string,
}

const Endorsement = ({person, personLink, text, className}: EndorsementProps) => (
    
                    <Card className={className || ""}>
                        <h3><Link href={personLink} className="text-white" target="_blank" rel="noopener noreferrer">{person}</Link></h3>
                        <p className="p">&quot;{text}&quot;</p>
                    </Card>
            
);

export default Endorsement;