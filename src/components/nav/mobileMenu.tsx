import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo.png';

const MobileMenu = ({menuOpen, setMenuOpen}: {menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div id="mobile-menu-container" className="flex flex-column bg-bg">
            <div id="mobile-menu-top" className="flex flex-row flex-center">
                <span onClick={() => setMenuOpen(!menuOpen)} className="fa-solid text-white cursor-pointer fa-chevron-left"/>
                <h2 className="text-white">Menu</h2>
            </div>
            <div className="flex flex-column flex-center">
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#about">
                        <span className="fa-solid fa-chevron-left"/>
                        <h3 className="space-infront">About</h3> 
                        <span className="fa-solid fa-address-card"/>
                    </Link>
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#samples">
                        <span className="fa-solid fa-chevron-left"/>
                        <h3 className="space-infront">Samples</h3>
                        <span className="fa-solid fa-code"/>
                    </Link>
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#endorsements">
                        <span className="fa-solid fa-chevron-left"/>
                        <h3 className="space-infront">Endorsements</h3>
                        <span className="fa-solid fa-handshake"/>
                    </Link>
                    <Link className="mobile-menu-list-item flex flex-row text-white text-hover-color1 border-top-1 border-top-white" href="#contact">
                        <span className="fa-solid fa-chevron-left"/>
                        <h3 className="space-infront">Contact</h3>
                        <span className="fa-solid fa-address-book"/>
                    </Link>
            </div>
            <div className="flex flex-center">
                <Link href="mailto:johnschool432@gmail.com">
                    <span className="text-white fa-solid fa-envelope text-hover-color1"/>
                </Link>
                <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-linkedin text-hover-color2"/>
                </Link>
                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-github text-hover-color3"/>
                </Link>
                
            </div>
            <p className="flex flex-center text-white space-infront">
                &copy; 2025 LyKey Tech
            </p>
            <div id="mobile-menu-logo-container" className="flex flex-center">
                <Image id="mobile-menu-logo" alt="Logo" src={Logo} className="logo"/>
            </div>
        </div>
    );
}

export default MobileMenu;