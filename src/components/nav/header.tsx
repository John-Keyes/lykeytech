import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Logo from '../../../public/images/logo.png';
import Button from '../button';
import {useRouter} from 'next/router';
import Image from 'next/image';
import PopMenu from '../popMenu';

const Header = () => {
    const {push, pathname} = useRouter();
    const topNavRoot = useRef<HTMLDivElement>(null);
    const [atTop, setAtTop] = useState(true);
    const IsTop = () => setAtTop(window.scrollY < (topNavRoot?.current?.clientHeight || 65));
    useEffect(() => {
        IsTop();
        window.addEventListener("scroll", IsTop);
        window.addEventListener("resize", IsTop);
        return () => {
            window.removeEventListener("scroll", IsTop);
            window.removeEventListener("resize", IsTop);
        }
    }, [topNavRoot]);
    
    if(pathname == "/resume") {
        return <></>;
    }
    //${atTop ? "bg-bg-half": "bg-bg"}
    return (
            <div ref={topNavRoot} id="top-nav-root" className={`flex fit-width bg-bg`}>
                <nav id="top-nav" className="flex fit-width content-container">
                    <Link id="header-logo-container" href="/">
                        <Image alt="Logo" src={Logo} className="logo"/>
                    </Link>
                    <div className="route-container-not-signin flex">
                    <Link className="route text-white text-hover-color2" href="/">Home</Link>
                    <PopMenu className="header-popmenu" trigger={<Link className="route text-white text-hover-color1" href="/people">Samples</Link>}>
                        <Link className="route text-white text-hover-color1" href="/people/john-keyes">John Keyes</Link>
                    </PopMenu>
                    <Link className="route text-white text-hover-color1" href="/samples">Samples</Link>
                        
                    <Link className="route text-white text-hover-color2" href="/about">About</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Header;