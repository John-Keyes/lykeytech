import React, {useRef, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import MobileMenu from './mobileMenu';
import { logo } from 'src/lib/static';

const Header = () => {
    const {pathname} = useRouter();
    const topNavRoot = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    
    if(pathname == "/resume") {
        return <></>;
    }
    
    return (
            <div ref={topNavRoot} id="top-nav-root" className="flex fit-width bg-dark-purple">
                <nav id="top-nav" className="flex fit-width content-container">
                    <Link id="header-logo-container" href="/">
                        <img alt="Logo" src={logo} width="80" height="80"/>
                    </Link>
                    <div id="mobile-menu-container-visibility">
                        <span className="fa-solid fa-bars fa-xl cursor-pointer text-white" onClick={() => setMenuOpen(!menuOpen)}/>
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div className="route-container flex">
                        <Link className="route" href="#about">About</Link>
                        <Link className="route" href="#samples">Samples</Link>
                        <Link className="route" href="#endorsements">Endorsements</Link>
                        <Link className="route" href="#socials">Socials</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Header;