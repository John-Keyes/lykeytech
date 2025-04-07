import React, { ReactNode, useState } from 'react';

type ClickMenuCommonProps = {
    children: ReactNode,
    className?: string,
    ariaLabel?: string,
    trigger: ReactNode
}


const ClickMenu = ({children, className, ariaLabel, trigger} : ClickMenuCommonProps) => {
    const [bodyDisplay, setBodyDisplay] = useState("none");
    return (
        <div aria-label={ariaLabel} className={`pop-menu-container ${className}`} onClick={() => setBodyDisplay("none")}>
            <div className="pop-menu-trigger" onClick={() => setBodyDisplay("flex")}>
                {trigger}
            </div>
            <div className="pop-menu-body bg-text" style={{display: bodyDisplay}}>
                {children}
            </div>
        </div>
    );
}

export default ClickMenu;