import React, { ComponentProps, ReactNode } from 'react';
import { WriteClipBoard } from '../../lib/helpers/browser';

interface TitlePropsType extends ComponentProps<"h1"> { 
    text: string | ReactNode, 
    className?: string
}

const Title = (props : TitlePropsType) => {
    const {id, text, className} = props;
    return (
        <h1 {...props} onClick={() => WriteClipBoard(window.location.href)} className={`flex ${className}`}>
            <span id={`${id}-paperclip`} className="title fa-solid fa-paperclip cursor-pointer border border-bg"/>
            <span id={`${id}-text`} className="title">{text}</span>
        </h1>
    );
}

export default Title;