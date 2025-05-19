import React, { Dispatch, SetStateAction, useRef } from 'react';
import Link from 'next/link';
import {logoPng} from 'src/lib/static';
import Button from '../button';

interface MobileMenuType {
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}
const MobileMenu = ({menuOpen, setMenuOpen}: MobileMenuType) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={mobileMenuRef} id="mobile-menu-container" className="flex-column bg-dark-purple" style={{display: menuOpen ? "flex": "none"}}>
            <div id="mobile-menu-top" className="flex flex-row flex-center">
                <span onClick={() => setMenuOpen(false)} className="fa-solid cursor-pointer fa-chevron-left"/>
                <h2 className="">Menu</h2>
            </div>
            <div id="mobile-menu-list" className="flex flex-column flex-center">
                    <Link href="#about" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-rowcursor-pointer">
                        <h3>About</h3> 
                        <span className="fa-solid fa-address-card"/>
                    </Link>
                    <Link href="#samples" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3>Samples</h3>
                        <span className="fa-solid fa-code"/>
                    </Link>
                    <Link href="#endorsements" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3>Endorsements</h3>
                        <span className="fa-solid fa-handshake"/>
                    </Link>
                    <Link href="#socials" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3>Socials</h3>
                        <span className="fa-solid fa-user-group"/>
                    </Link>
                    <Button className="bg-purple bg-hover-light-purple button-glow-purple"><Link href="mailto:john.keyes@lykeytech.com" className="">Contact Me</Link></Button>
            </div>
            <div id="mobile-menu-logo-container" className="flex flex-center">
                <img id="mobile-menu-logo" alt="Logo" src={logoPng} width="80" height="80"/>
            </div>
        </div>
    );
}

export default MobileMenu;