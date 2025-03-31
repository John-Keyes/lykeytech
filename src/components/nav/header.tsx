import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import Button from '../button';
import {useRouter} from 'next/router';
import Image from 'next/image';
import PopMenu from '../popMenu';
import MobileMenu from './mobileMenu';

const Header = () => {
    const {push, pathname} = useRouter();
    const topNavRoot = useRef<HTMLDivElement>(null);
    const [atTop, setAtTop] = useState<boolean>(true);
    const [menuOpen, setMenuOpen] = useState<boolean>(true);
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
                        <Image alt="Logo" src={logo} className="logo"/>
                    </Link>
                    <div id="mobile-menu-visibility"className="">
                    <span className="fa-solid fa-bars cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)} />
                    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div className="route-container-not-signin flex">
                        <Link className="route text-white text-hover-color2" href="#about">About</Link>
                        <Link className="route text-white text-hover-color1" href="#samples">Samples</Link>
                        <Link className="route text-white text-hover-color1" href="#endorsements">Endorsements</Link>
                        <Link className="route text-white text-hover-color2" href="#contact">Contact</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Header;