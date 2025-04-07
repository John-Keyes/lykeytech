import React, { ComponentProps, ReactNode, useState } from 'react';
import { WriteClipBoard } from '../../lib/browser';

interface SubTitlePropsType extends ComponentProps<"h2"> { 
    children?: ReactNode, 
    text: string | ReactNode, 
    className?: string,
    sectionclassName?: string
}

const SubTitle = (props : SubTitlePropsType) => {
    const {id, children, text, className, sectionclassName} = props;
    //const [h2Enter, seth2Enter] = useState<string | undefined>("hidden");
    return (
        <>
            <h2 {...props} className={`flex cursor-pointer  ${className || ""}`}>
                <span id={`${id}-text`} className="sub-title text-hover-inherit">{text}</span>
                {/*<span id={`${id}-copy`} onClick={() => WriteClipBoard(`${window.location.href}/#${id}`)} style={{visibility: h2Enter}}className={`space-infront sub-title fa-solid fa-sm sub-title-link-align cursor-pointer fa-copy ${iconClassName || ""}`}/>*/}
            </h2>
            {children && (
                <section id={`${id}-section-body`} className={sectionclassName || ""}>
                    {children}
                </section>
            )}
        </>
    );
}

export default SubTitle;