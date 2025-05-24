import Link from 'next/link';
import React, { ReactNode, useRef } from 'react';
import Button from './button';
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
                <div className="flex flex-row flex-center flex-start-md">
                    <Button onClick={HandleButtonClick} className={props.className || ""}>
                        <span className="fa-solid fa-download" />
                        <span className="space-infront">
                            {props.children}
                        </span>
                    </Button>
                    <Link ref={downloadLink} href={props.href || "#"} style={{display: "none"}} download/>
                </div>
    );
}
export default DownloadIcon;