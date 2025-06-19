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
                        <Link id="header-logo-link" aria-label="Header Logo Link" title="Header Logo Link" href="/">
                            <img alt="Logo Gif" src={logoGif} width="55" height="50"/>
                        </Link>
                    </div>
                    <div id="mobile-menu-container-visibility" aria-label="Mobile Menu Container Visibility">
                        <span className="fa-solid fa-bars fa-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}/>
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                    </div>
                    <div id="header-route-container" aria-label="Header Route Container" className="route-container flex">
                        <Link id="header-route-about" aria-label="Header Route About" title="Header Route About" className="route" href="#about">About</Link>
                        <Link id="header-route-samples" aria-label="Header Route Samples" title="Header Route Samples" className="route" href="#samples">Samples</Link>
                        <Link id="header-route-endorsements" aria-label="Header Route Endorsements" title="Header Route Endorsements" className="route" href="#endorsements">Endorsements</Link>
                        <Link id="header-route-socials" aria-label="Header Route Socials" title="Header Route Socials" className="route" href="#socials">Socials</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Header;