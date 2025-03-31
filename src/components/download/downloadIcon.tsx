import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ComponentProps, ReactNode, useEffect, useRef } from 'react';


const DownloadIcon = () => {
    const downloadLink = useRef<HTMLAnchorElement>(null);
    const HandleSpanClick = () => {
        downloadLink?.current?.click();
    }
    
    return (
                <div>
                    <span className="bg-bg rounded-md text-white fa-solid fa-download" onClick={HandleSpanClick}/>
                    <Link ref={downloadLink} href="/docs/john_keyes_resume.docx" style={{display: "none"}} download></Link>
                </div>
    );
}
export default DownloadIcon;