import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo.png';

const MobileMenu = ({open, setOpen}: {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    const {pathname, replace} = useRouter();

    const MenuWrap = (Operation: () => void) => {
        Operation();
        setOpen(false);
    }

    return (
        <div className="flex flex-column bg-darker-bg">
            <div id="mobile-menu-top" className="flex">
                <span className="fa-solid fa-chevron-left"/>
                <h2>Menu</h2>
            </div>
            <div className="flex flex-center">
                <Link href="mailto:john.keyes@lykey.com">
                    <span className="fa-solid fa-envelope text-hover-color1"/>
                </Link>
                <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                    <span className="fa-brands fa-linkedin text-hover-color2"/>
                </Link>
                <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                    <span className="fa-brands fa-github text-hover-color3"/>
                </Link>
                <span className="space-infront">
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