import React, { ComponentProps, ReactNode } from 'react';

interface TitlePropsType extends ComponentProps<"h1"> { 
    text: string | ReactNode, 
    className?: string
}

const Title = (props : TitlePropsType) => {
    const {id, text, className} = props;
    return (
        <h1 {...props} className={`flex cursor-pointer ${className}`} >
            <span id={`${id}-text`} className="title">{text}</span>
        </h1>
    );
}

export default Title;