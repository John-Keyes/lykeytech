import Link from 'next/link';
import React, { ComponentProps, ReactNode, useState } from 'react';

interface TagProps extends ComponentProps<"a"> {
    href: string,
    text: string, 
    className?: string
}

const Tag = (props: TagProps) => {
    return <Link className={`tag rounded-md transition-fast text-white gradient-purple bg-hover-light-purple ${props.className}`} href={props.href}>{props.text}</Link>;
}

export default Tag;