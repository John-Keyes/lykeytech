import React, { ComponentProps, ReactNode } from 'react';
import { WriteClipBoard } from '../../lib/browser';

interface TitlePropsType extends ComponentProps<"h1"> { 
    text: string | ReactNode, 
    className?: string
}

const Title = (props : TitlePropsType) => {
    const {id, text, className} = props;
    return (
        <h1 {...props} onClick={() => WriteClipBoard(window.location.href)} className={`flex cursor-pointer ${className}`} >
            <span id={`${id}-text`} className="title">{text}</span>
        </h1>
    );
}

export default Title;