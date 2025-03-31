import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ComponentProps, ReactNode, useEffect, useRef } from 'react';
import DownloadIcon from './download/downloadIcon';


const DownloadHeader = () => {
    const {back} = useRouter();

    return (
    <div id="top-nav-root" className={`flex fit-width bg-bg`}>
        <nav className="flex fit-width content-container">
            <span className="text-white text-hover-color2 fa-regular fa-house" onClick={() => back()}/>
            <DownloadIcon/>
        </nav>
    </div>
    )
}

export default DownloadHeader;