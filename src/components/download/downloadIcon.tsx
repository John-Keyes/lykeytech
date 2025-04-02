import Link from 'next/link';
import React, { ReactNode, useRef } from 'react';
import Button from '../button';
import { Url } from 'next/dist/shared/lib/router/router';

interface DownloadIconType {
    href?: Url, 
    className?: string,
    children?: ReactNode
}

const DownloadIcon = (props: DownloadIconType) => {
    const downloadLink = useRef<HTMLAnchorElement>(null);
    const HandleButtonClick = () => {
        downloadLink?.current?.click();
    }
    
    return (
                <div className="flex flex-row">
                    <Button onClick={HandleButtonClick} className={props.className || ""}>
                        <span className="text-white fa-solid fa-download" />
                        {props.children}
                    </Button>
                    <Link ref={downloadLink} href={props.href || "#"} style={{display: "none"}} download/>
                </div>
    );
}
export default DownloadIcon;