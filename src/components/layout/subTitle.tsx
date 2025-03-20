import React, { ComponentProps, ReactNode } from 'react';
import { WriteClipBoard } from '../../lib/helpers/browser';

interface SubTitlePropsType extends ComponentProps<"h2"> { 
    children?: ReactNode, 
    text: string | ReactNode, 
    className?: string
}

const SubTitle = (props : SubTitlePropsType) => {
    const {id, children, text, className} = props;
    return (
        <>
            <h2 {...props} className={`flex ${className}`}>
                <span id={`${id}-paperclip`} onClick={() => WriteClipBoard(`${window.location.href}/#${id}`)} className="fa-solid sub-title-link-align fa-paperclip cursor-pointer"/>
                <span id={`${id}-text`} className="sub-title">{text}</span>
            </h2>
            {children && (
                <section id={`${id}-section-body`}>
                    {children}
                </section>
            )}
        </>
    );
}

export default SubTitle;