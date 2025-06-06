import React, { ComponentProps, ReactNode, useState } from 'react';

interface SubTitlePropsType extends ComponentProps<"h2"> { 
    children?: ReactNode, 
    text: string | ReactNode, 
    className?: string,
    sectionclassname?: string
}

const SubTitle = (props : SubTitlePropsType) => {
    return (
        <>
            <h2 {...props} className={`flex cursor-pointer ${props.className || ""}`}>
                <span id={`${props.id}-text`} className="sub-title text-hover-inherit text-align-inherit">{props.text}</span>
            </h2>
            {props.children && (
                <section id={`${props.id}-section-body`} aria-label={`${props["aria-label"]}-section-body`} className={props.sectionclassname || ""}>
                    {props.children}
                </section>
            )}
        </>
    );
}

export default SubTitle;