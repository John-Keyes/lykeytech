import React, { ReactNode, useState } from 'react';

type PopMenuPropType = {
    id: string,
    children: ReactNode,
    className?: string,
    ariaLabel?: string,
    trigger: ReactNode
}


const PopMenu = ({id, children, className, ariaLabel, trigger} : PopMenuPropType) => {
    const [bodyDisplay, setBodyDisplay] = useState("none");
    return (
        <div aria-label={ariaLabel} className={`pop-menu-container ${className}`} onMouseLeave={() => setBodyDisplay("none")} id={id}>
            <div id={`${id}-trigger`} aria-label={`${id} Trigger`} className="pop-menu-trigger" onMouseEnter={() => setBodyDisplay("flex")}>
                {trigger}
            </div>
            <div id={`${id}-body`} aria-label={`${id} Body`}className="pop-menu-body bg-dark-gray" style={{display: bodyDisplay}}>
                {children}
            </div>
        </div>
    );
}

export default PopMenu;