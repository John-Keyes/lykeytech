import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Link from 'next/link';
import { logo } from 'src/lib/static';
import Button from '../button';
import { useRouter } from 'next/router';

interface MobileMenuType {
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}
const MobileMenu = (props: MobileMenuType) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const {push} = useRouter();
    useEffect(() => {
        const HandleClickOutside = (e: any) => {
          if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.currentTarget)) {
            props.setMenuOpen(false);
          }
        }
        document.addEventListener("mousedown", HandleClickOutside);
        return () => {
          document.removeEventListener("mousedown", HandleClickOutside);
        };
      }, [mobileMenuRef]);

    return (
        <div ref={mobileMenuRef} id="mobile-menu-container" className="flex-column bg-dark-purple" style={{display: props.menuOpen ? "flex": "none"}}>
            <div id="mobile-menu-top" className="flex flex-row flex-center">
                <span onClick={() => props.setMenuOpen(false)} className="fa-solid text-white cursor-pointer fa-chevron-left"/>
                <h2 className="text-white">Menu</h2>
            </div>
            <div id="mobile-menu-list" className="flex flex-column flex-center">
                    <Link href="#about" onClick={() => props.setMenuOpen(false)} className="mobile-menu-list-item flex flex-row text-white cursor-pointer">
                        <h3>About</h3> 
                        <span className="fa-solid fa-address-card"/>
                    </Link>
                    <Link href="#samples" onClick={() => props.setMenuOpen(false)} className="mobile-menu-list-item flex flex-row text-white cursor-pointer">
                        <h3>Samples</h3>
                        <span className="fa-solid fa-code"/>
                    </Link>
                    <Link href="#endorsements" onClick={() => props.setMenuOpen(false)} className="mobile-menu-list-item flex flex-row text-white cursor-pointer">
                        <h3>Endorsements</h3>
                        <span className="fa-solid fa-handshake"/>
                    </Link>
                    <Link href="#socials" onClick={() => props.setMenuOpen(false)} className="mobile-menu-list-item flex flex-row text-white cursor-pointer">
                        <h3>Socials</h3>
                        <span className="fa-solid fa-handshake"/>
                    </Link>
                    <Button className="bg-purple bg-hover-light-purple button-glow-purple"><Link href="mailto:john.keyes@lykeytech.com" className="text-white">Contact Me</Link></Button>
            </div>
            <div id="mobile-menu-logo-container" className="flex flex-center">
                <img id="mobile-menu-logo" alt="Logo" src={logo} width="80" height="80"/>
            </div>
        </div>
    );
}

export default MobileMenu;