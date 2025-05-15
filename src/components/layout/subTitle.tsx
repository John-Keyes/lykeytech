import React, { ComponentProps, ReactNode, useState } from 'react';

interface SubTitlePropsType extends ComponentProps<"h2"> { 
    children?: ReactNode, 
    text: string | ReactNode, 
    className?: string,
    sectionclassname?: string
}

const SubTitle = (props : SubTitlePropsType) => {
    const {id, children, text, className, sectionclassname} = props;
    return (
        <>
            <h2 {...props} className={`flex cursor-pointer  ${className || ""}`}>
                <span id={`${id}-text`} className="sub-title text-hover-inherit text-align-inherit">{text}</span>
            </h2>
            {children && (
                <section id={`${id}-section-body`} className={sectionclassname || ""}>
                    {children}
                </section>
            )}
        </>
    );
}

export default SubTitle;