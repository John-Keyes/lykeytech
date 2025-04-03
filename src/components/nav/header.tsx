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
    //const [atTop, setAtTop] = useState<boolean>(true);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    /*const IsTop = () => setAtTop(window.scrollY < (topNavRoot?.current?.clientHeight || 65));
    useEffect(() => {
        IsTop();
        window.addEventListener("scroll", IsTop);
        window.addEventListener("resize", IsTop);
        return () => {
            window.removeEventListener("scroll", IsTop);
            window.removeEventListener("resize", IsTop);
        }
    }, [topNavRoot]);*/
    
    if(pathname == "/resume") {
        return <></>;//border-bottom border-bottom-3 border-bottom-light-purple
    }
    //${atTop ? "bg-dark-purple-half": "bg-dark-purple"}
    return (
            <div ref={topNavRoot} id="top-nav-root" className={`flex fit-width bg-dark-purple`}>
                <nav id="top-nav" className="flex fit-width content-container">
                    <Link id="header-logo-container" href="/">
                        <Image alt="Logo" src={logo} className="logo"/>
                    </Link>
                    <div id="mobile-menu-container-visibility">
                        <span className="fa-solid fa-bars cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)} />
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div className="route-container flex">
                        <Link className="route text-white text-hover-light-blue" href="#about">About</Link>
                        <Link className="route text-white text-hover-light-purple" href="#samples">Samples</Link>
                        <Link className="route text-white text-hover-light-blue" href="#endorsements">Endorsements</Link>
                        <Link className="route text-white text-hover-light-purple" href="#socials">Socials</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Header;