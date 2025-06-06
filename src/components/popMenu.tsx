import React, { ReactNode, useState } from 'react';

type PopMenuPropType = {
    id: string,
    children: ReactNode,
    className?: string,
    "aria-label"?: string,
    trigger: ReactNode
}


const PopMenu = (props: PopMenuPropType) => {
    const [bodyDisplay, setBodyDisplay] = useState("none");
    return (
        <div id={props.id} aria-label={props["aria-label"]} role="tooltip" className={`pop-menu-container ${props.className}`} onMouseLeave={() => setBodyDisplay("none")}>
            <div id={`${props.id}-trigger`} role="tooltip" aria-label={`${props["aria-label"]} Trigger`} className="pop-menu-trigger" onMouseEnter={() => setBodyDisplay("flex")}>
                {props.trigger}
            </div>
            <div id={`${props.id}-body`} aria-label={`${props["aria-label"]} Body`} className="pop-menu-body bg-dark-gray" style={{display: bodyDisplay}}>
                {props.children}
            </div>
        </div>
    );
}

export default PopMenu;