import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Link from 'next/link';
import { logo } from 'src/lib/static';
import Button from '../button';

interface MobileMenuType {
    menuOpen: boolean,
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}
const MobileMenu = (props: MobileMenuType) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const HandleClickOutside = (e: any) => {
          if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.currentTarget)) {
            props.setMenuOpen(!props.menuOpen);
          }
        }
        document.addEventListener("mousedown", HandleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", HandleClickOutside);
        };
      }, [mobileMenuRef]);
    return (
        <div ref={mobileMenuRef} id="mobile-menu-container" className="flex flex-column bg-dark-purple" style={{display: props.menuOpen ? "flex": "none"}}>
            <div id="mobile-menu-top" className="flex flex-row flex-center">
                <span onClick={() => props.setMenuOpen(!props.menuOpen)} className="fa-solid text-white cursor-pointer fa-chevron-left"/>
                <h2 className="text-white">Menu</h2>
            </div>
            <div id="mobile-menu-list" className="flex flex-column flex-center">
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#about">
                        <h3>About</h3> 
                        <span className="fa-solid fa-address-card"/>
                    </Link>
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#samples">
                        <h3>Samples</h3>
                        <span className="fa-solid fa-code"/>
                    </Link>
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#endorsements">
                        <h3>Endorsements</h3>
                        <span className="fa-solid fa-handshake"/>
                    </Link>
                    <Button className="bg-purple bg-hover-light-purple button-glow-purple"><Link href="mailto:johnschool432@gmail.com" className="text-white">Contact Me</Link></Button>
            </div>
            <div className="flex flex-center space-above">
                <Link href="mailto:johnschool432@gmail.com">
                    <span className="text-white fa-solid fa-envelope text-hover-dark-red"/>
                </Link>
                <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-linkedin text-hover-dark-blue"/>
                </Link>
                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-github text-hover-black"/>
                </Link>
            </div>
            <p className="flex flex-center text-white space-infront">
                &copy; 2025 LyKeyTech
            </p>
            <div id="mobile-menu-logo-container" className="flex flex-center">
                <img id="mobile-menu-logo" alt="Logo" src={logo} width="80" height="80"/>
            </div>
        </div>
    );
}

export default MobileMenu;