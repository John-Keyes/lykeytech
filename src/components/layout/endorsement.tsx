import React, { ComponentProps } from 'react';
import Link from 'next/link';
import Card from '../card';

interface EndorsementProps extends ComponentProps<"div"> {
    person: string;
    personLink: string;
    text: string;
    hoverColor: string;
    className?: string;
}

const Endorsement = (props: EndorsementProps) => (
    
                    <Card className={props.className || ""}>
                        <h3><Link href={props.personLink} className={`text-hover-${props.hoverColor}`} target="_blank" rel="noopener noreferrer">{props.person}</Link></h3>
                        <p className="p">&quot;{props.text}&quot;</p>
                    </Card>
            
);

export default Endorsement;