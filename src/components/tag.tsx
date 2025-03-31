import Link from 'next/link';
import React, { ComponentProps, ReactNode, useState } from 'react';

interface TagProps extends ComponentProps<"div"> {
    href: string,
    text: string, 
    className?: string
}

const Tag = (props: TagProps) => {
    return <Link className={`tag bg-transparent bg-hover-bg rounded-md border-3 border-bg ${props.className}`} href={props.href}>{props.text}</Link>;
}

export default Tag;