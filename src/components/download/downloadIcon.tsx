import Link from 'next/link';
import React, { useRef } from 'react';
import Button from '../button';


const DownloadIcon = ({href = "#"}: {href?: string}) => {
    const downloadLink = useRef<HTMLAnchorElement>(null);
    const HandleButtonClick = () => {
        downloadLink?.current?.click();
    }
    
    return (
                <>
                    <Button onClick={HandleButtonClick}>
                        <span className="text-white fa-solid fa-download" />
                    </Button>
                    <Link ref={downloadLink} href={href} style={{display: "none"}} download></Link>
                </>
    );
}
export default DownloadIcon;