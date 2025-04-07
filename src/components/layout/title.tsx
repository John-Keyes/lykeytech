import React, { ComponentProps, ReactNode, useState } from 'react';
import { WriteClipBoard } from '../../lib/helpers/browser';

interface TitlePropsType extends ComponentProps<"h1"> { 
    text: string | ReactNode, 
    className?: string
}

const Title = (props : TitlePropsType) => {
    const {id, text, className} = props;
    //const [h1Enter, seth1Enter] = useState<boolean>(false);
    return (
        <h1 {...props} onClick={() => WriteClipBoard(window.location.href)} className={`flex cursor-pointer ${className}`} >
            <span id={`${id}-text`} className="title">{text}</span>
            {/*h1Enter && <span id={`${id}-copy`} onClick={() => WriteClipBoard(`${window.location.href}/#${id}`)} className="fa-solid sub-title-link-align cursor-pointer fa-copy space-infront"/>*/}
        </h1>
    );
}

export default Title;