import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo.png';

const MobileMenu = ({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    const {pathname, push, replace} = useRouter();

    const MenuWrap = (Operation?: () => void) => {
        if(Operation) {
            Operation();
        }
        setOpen(false);
    }

    return (
        <div id="mobile-menu-container" className="flex flex-column bg-bg">
            <div id="mobile-menu-top" className="flex">
                <span onClick={() => MenuWrap()} className="fa-solid fa-chevron-left"/>
                <h2 className="text-white">Menu</h2>
            </div>
            <div className="flex flex-column flex-center">
                <h3>Contact</h3>
                <ul id="mobile-menu-list" className="flex flex-column">
                    <li className="mobile-menu-list-item border-top-1 border-top-white">
                        <h4>About</h4>
                        <span className="fa-solid fa-address-card"/>
                    </li>
                    <li className="mobile-menu-list-item border-bottom-1 border-bottom-white border-top-1 border-top-white">
                        <h4>My Posts</h4>
                        <span className="fa-solid fa-chevron-right"/>
                    </li>
                    <li className="mobile-menu-list-item border-top-1 border-top-white">
                        <h4>Settings</h4>
                        <span className="fa-solid fa-gear"/>
                    </li>
                    <li onClick={() => MenuWrap(() => push("/"))} className="mobile-menu-list-item border-bottom-1 border-bottom-white border-top-1 border-top-white">
                        <h4>Sign Out</h4>
                        <span className="fa-solid fa-arrow-right-from-bracket"/>
                    </li>
                </ul>
            </div>
            <div className="flex flex-center">
                <Link href="mailto:john.keyes@lykey.com">
                    <span className="text-white fa-solid fa-envelope text-hover-color1"/>
                </Link>
                <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-linkedin text-hover-color2"/>
                </Link>
                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                    <span className="text-white fa-brands fa-github text-hover-color3"/>
                </Link>
                <span className="text-white space-infront">
                    &copy; 2025 LyKey Tech
                </span>
            </div>
            <div id="mobile-menu-logo-container">
                <Image id="mobile-menu-logo" alt="Logo" src={Logo} className="logo"/>
            </div>
        </div>
    );
}

export default MobileMenu;