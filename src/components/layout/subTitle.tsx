import React, { ComponentProps, ReactNode, useState } from 'react';
import { WriteClipBoard } from '../../lib/helpers/browser';

interface SubTitlePropsType extends ComponentProps<"h2"> { 
    children?: ReactNode, 
    text: string | ReactNode, 
    className?: string
}

const SubTitle = (props : SubTitlePropsType) => {
    const {id, children, text, className} = props;
    const [h2Enter, seth2Enter] = useState<boolean>(false);
    return (
        <>
            <h2 {...props} className={`flex cursor-pointer ${className}`} onMouseEnter={() => seth2Enter(true)} onMouseLeave={() => seth2Enter(false)}>
                <span id={`${id}-text`} className="sub-title">{text}</span>
                {h2Enter && <span id={`${id}-copy`} onClick={() => WriteClipBoard(`${window.location.href}/#${id}`)} className="fa-solid sub-title-link-align cursor-pointer fa-copy"/>}
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