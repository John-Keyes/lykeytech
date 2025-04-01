import Link from 'next/link';
import React, { ComponentProps, ReactNode, useState } from 'react';

interface TagProps extends ComponentProps<"a"> {
    href: string,
    text: string, 
    className?: string
}

const Tag = (props: TagProps) => {
    return <Link className={`tag rounded-md border-3 transition-fast border-purple bg-transparent bg-hover-light-purple ${props.className}`} href={props.href}>{props.text}</Link>;
}

export default Tag;