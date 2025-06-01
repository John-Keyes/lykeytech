import Link from 'next/link';
import React, { ComponentProps, ReactNode, useState } from 'react';
import Button from './button';

interface TagProps extends ComponentProps<"a"> {
    href: string,
    text: string, 
    className?: string
}

const Tag = (props: TagProps) => (
    <Button id={`${props.id}-button`} className={`tag rounded-md transition-fast ${props.className}`}>
        <span className="text-inherit">&#183; <Link className="text-inherit" target="_blank" rel="noopener noreferrer" {...props}>{props.text}</Link> &#183;</span>
    </Button>
);

export default Tag;