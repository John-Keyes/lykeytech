import React, {useRef, useState} from 'react';
import Link from 'next/link';
import MobileMenu from './mobileMenu';
import { logoGif } from 'src/lib/helpers/static';

const Header = () => {
    const topNavRoot = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    
    return (
            <div ref={topNavRoot} id="header-root" aria-label="Header Root" className="flex fit-width bg-dark-purple">
                <nav id="header-nav" aria-label="Header Navigation" className="flex fit-width content-container">
                    <div id="header-logo-container" aria-label="Header Logo Container">
                        <Link id="header-logo-link" aria-label="Header Logo Link" href="/">
                            <img alt="Logo Gif" src={logoGif} width="55" height="50"/>
                        </Link>
                    </div>
                    <div id="mobile-menu-container-visibility" aria-label="Mobile Menu Container Visibility">
                        <span className="fa-solid fa-bars fa-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div id="header-route-container" aria-label="Header Route Container" className="route-container flex">
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