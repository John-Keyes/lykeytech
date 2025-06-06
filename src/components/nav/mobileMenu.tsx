import React, { Dispatch, SetStateAction, useRef } from 'react';
import Link from 'next/link';
import {logoPng} from 'src/lib/helpers/static';
import Button from '../button';

interface MobileMenuType {
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}
const MobileMenu = ({menuOpen, setMenuOpen}: MobileMenuType) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={mobileMenuRef} id="mobile-menu-container" className="flex-column bg-dark-purple" style={{display: menuOpen ? "flex": "none"}}>
            <div id="mobile-menu-top-container" aria-label="Mobile Menu Top Container" className="flex flex-row flex-center">
                <span id="mobile-menu-top-back-arrow" aria-label="Mobile Menu Top Back Arrow" onClick={() => setMenuOpen(false)} className="fa-solid cursor-pointer fa-chevron-left"/>
                <h2 id="mobile-menu-top-title" aria-label="Mobile Menu Top Title">Menu</h2>
            </div>
            <div id="mobile-menu-list" aria-label="Mobile Menu List" className="flex flex-column flex-center">
                    <Link id="mobile-menu-list-item-0" aria-label="Mobile Menu List Item 0" href="#about" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-0-label" aria-label="Mobile Menu List Item 0 Label">About</h3> 
                        <span id="mobile-menu-list-item-0-icon" aria-label="Mobile Menu List Item 0 Icon" className="fa-solid fa-address-card"/>
                    </Link>
                    <Link id="mobile-menu-list-item-1" aria-label="Mobile Menu List Item 1" href="#samples" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-1-label" aria-label="Mobile Menu List Item 1 Label">Samples</h3>
                        <span id="mobile-menu-list-item-1-icon" aria-label="Mobile Menu List Item 1 Icon" className="fa-solid fa-code"/>
                    </Link>
                    <Link id="mobile-menu-list-item-2" aria-label="Mobile Menu List Item 2" href="#endorsements" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-2-label" aria-label="Mobile Menu List Item 2 Label">Endorsements</h3>
                        <span id="mobile-menu-list-item-2-icon" aria-label="Mobile Menu List Item 2 Icon" className="fa-solid fa-handshake"/>
                    </Link>
                    <Link id="mobile-menu-list-item-3" aria-label="Mobile Menu List Item 3" href="#socials" onClick={() => setMenuOpen(false)} className="mobile-menu-list-item flex flex-row cursor-pointer">
                        <h3 id="mobile-menu-list-item-3-label" aria-label="Mobile Menu List Item 3 Label">Socials</h3>
                        <span id="mobile-menu-list-item-3-icon" aria-label="Mobile Menu List Item 3 Icon" className="fa-solid fa-user-group"/>
                    </Link>
                    <Button id="mobile-menu-list-item-contact" aria-label="Mobile Menu List Item Contact" className="bg-purple bg-hover-light-purple button-glow-purple">
                        <Link id="mobile-menu-list-item-contact-link" aria-label="Mobile Menu List Item Contact Link" href="mailto:john.keyes@lykeytech.com">Contact Me</Link>
                    </Button>
            </div>
            <div id="mobile-menu-logo-container" aria-label="Mobile Menu Logo Container" className="flex flex-center">
                <img id="mobile-menu-logo" aria-label="Mobile Menu Logo" alt="Logo" src={logoPng} width="80" height="80"/>
            </div>
        </div>
    );
}

export default MobileMenu;