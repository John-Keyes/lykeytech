import React, { ReactNode, useState } from 'react';

type PopMenuCommonProps = {
    children: ReactNode,
    className?: string,
    ariaLabel?: string,
    trigger: ReactNode
}


const PopMenu = ({children, className, ariaLabel, trigger} : PopMenuCommonProps) => {
    const [bodyDisplay, setBodyDisplay] = useState("none");
    return (
        <div aria-label={ariaLabel} className={`pop-menu-container ${className}`} onMouseLeave={() => setBodyDisplay("none")}>
            <div className="pop-menu-trigger" onMouseEnter={() => setBodyDisplay("flex")}>
                {trigger}
            </div>
            <div className="pop-menu-body bg-color-darker-bg" style={{display: bodyDisplay}}>
                {children}
            </div>
        </div>
    );
}

export default PopMenu;