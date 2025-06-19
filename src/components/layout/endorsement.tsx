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
    
                    <Card {...props} className={`endorsement ${props.className || ""}`}>
                        <h3 id={`${props.id}-author`} aria-label={`${props["aria-label"]}-author`}>
                            <Link id={`${props.id}-author-link`} aria-label={`${props["aria-label"]} Author Link`} title={`${props["aria-label"]} Author Link`} href={props.personLink} className={`text-hover-${props.hoverColor}`} target="_blank" rel="noopener noreferrer">{props.person}</Link>
                        </h3>
                        <p id={`${props.id}-message`} aria-label={`${props["aria-label"]}-message`} className="p fit-width">&quot;{props.text}&quot;</p>
                    </Card>
            
);

export default Endorsement;