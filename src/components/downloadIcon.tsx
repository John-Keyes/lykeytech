import Link from 'next/link';
import React, { ReactNode, useRef } from 'react';
import Button, { ButtonPropsType } from './button';
import { Url } from 'next/dist/shared/lib/router/router';

interface DownloadIconType extends ButtonPropsType {
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
                <>
                    <Button onClick={HandleButtonClick} className={props.className || ""} {...props}>
                        <span className="fa-solid fa-download" />
                        <span className="space-infront">
                            {props.children}
                        </span>
                    </Button>
                    <Link ref={downloadLink} href={props.href || "#"} style={{display: "none"}} download/>
                </>
    );
}
export default DownloadIcon;