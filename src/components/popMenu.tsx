import React, { ReactNode, useState } from 'react';

type PopMenuPropType = {
    children: ReactNode,
    className?: string,
    ariaLabel?: string,
    trigger: ReactNode
}


const PopMenu = ({children, className, ariaLabel, trigger} : PopMenuPropType) => {
    const [bodyDisplay, setBodyDisplay] = useState("none");
    return (
        <div aria-label={ariaLabel} className={`pop-menu-container ${className}`} onMouseLeave={() => setBodyDisplay("none")}>
            <div className="pop-menu-trigger" onMouseEnter={() => setBodyDisplay("flex")}>
                {trigger}
            </div>
            <div className="pop-menu-body bg-dark-gray" style={{display: bodyDisplay}}>
                {children}
            </div>
        </div>
    );
}

export default PopMenu;